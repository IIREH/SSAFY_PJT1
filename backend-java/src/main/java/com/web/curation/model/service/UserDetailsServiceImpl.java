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

import java.util.List;

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
        List<User> userList=userRepository.findByEmail(username);
        log.info("user:{}",userList);
        if(userList.isEmpty()){
            throw new UserIdNotFoundException("아이디가 없음");
        }

        User user =userList.get(0);
        return  org.springframework.security.core.userdetails
                .User.builder().username(user.getEmail())
                .password(passwordEncoder.encode(user.getPwd()))
                .roles("USER").build();
    }
}
