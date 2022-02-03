package com.web.curation.model.service;


import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.function.Predicate;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final String ERROR_MESSAGE="어떻게 접근했음?";
    private final TokenProvider tokenProvider;

    @Override
    public void register(UserDto userDto) {
        log.info("회원가입 정보:{}",userDto);
        findByEmailOrNickName(userDto.getId(),userDto.getNickName(),o->o!=null,"아이디나 닉네임이 이미 있어요");
        User user = User.builder()
                .email(userDto.getId())
                .pwd(userDto.getPwd())
                .nickname(userDto.getNickName())
                .role("USER")
                .build();

       userRepository.insert(user);
    }

    @Override
    public void update(String jwt, UserDto userDto) {
        log.info("jwt:{}",jwt);

        log.info("jwt 해독:{}",tokenProvider.getId(jwt));
        User jwtUser = userRepository.findByEmail(tokenProvider.getId(jwt));
        log.info("jwtUser",jwtUser);

        User user =findByEmailOrNickName(jwtUser.getEmail(),jwtUser.getNickname(),o->o==null,ERROR_MESSAGE);
        User updateUser =
                User.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .followee(user.getFollowee())
                        .name(user.getName())
                        .follower(user.getFollower())
                        .nickname(userDto.getNickName())
                        .pwd(userDto.getPwd())
                        .role(user.getRole())
                        .build();


        log.info("회원수정 before:{}, after:{}",user,updateUser);

        userRepository.save(updateUser);
    }
    //TODO 우선 아예 삭제하는걸로 만듬. 추후에 삭제를 기록하는 것도 좋아보임.

    @Override
    public void delete(String jwt) {
        User jwtUser = userRepository.findByEmail(tokenProvider.getId(jwt));
        User user = findByEmailOrNickName(jwtUser.getEmail(),jwtUser.getNickname(),o -> o==null,ERROR_MESSAGE);
        userRepository.delete(user);
        User deleteUser = userRepository.findByEmailOrNickname(user.getEmail(),user.getNickname());
        log.info("회원 삭제전 유저:{}, 삭제 확인:{}",user,deleteUser);
    }

    private User findByEmailOrNickName(String email,String nickName,Predicate<User> predicate,String msg){
        User user = userRepository.findByEmailOrNickname(email, nickName);
        if(predicate.test(user))
            throw new RuntimeException(msg);
        return  user;
    }

}
