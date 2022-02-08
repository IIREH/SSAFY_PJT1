package com.web.curation.model.service;

import com.web.curation.exception.UserIdNotFoundException;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Slf4j
@Component("userDetailsService")
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //TODO DB 접근 객체를 주입하고,
        // 아이디를 조회후,
        // 비밀번호 encode값에 넣기
        User user=userRepository.findByEmail(username);
        log.info("user:{}",user);

        return Optional.ofNullable(user).map(x->
                        org.springframework.security.core.userdetails
                                .User.builder().username(x.getEmail())
                                .password(passwordEncoder.encode(x.getPwd()))
                                .roles(x.getRole()).build()
                ).orElseThrow(UserIdNotFoundException::new);

    }
}
