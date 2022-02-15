package com.web.curation.model.service;


import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Validated
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
                .likePost(new ArrayList<>())
                .follower(new ArrayList<>())
                .following(new ArrayList<>())
                .role("USER")
                .build();
       userRepository.insert(user);
       //UserDto dto = UserDto.builder().id(user.getId())

    }

    @Override
    public void update(UserDto userDto) {
        String jwt = userDto.getJwt();
        log.info("jwt:{}",jwt);
        log.info("jwt 해독:{}",tokenProvider.getId(jwt));
        User jwtUser = userRepository.findByEmail(tokenProvider.getId(jwt));
        log.info("jwtUser",jwtUser);

        User user =findByEmailOrNickName(jwtUser.getEmail(),jwtUser.getNickname(),o->o==null,ERROR_MESSAGE);
        User updateUser =
                User.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .follower(user.getFollower())
                        .following(user.getFollowing())
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

    @Override
    public String getNickName(String jwt) {
        User user = userRepository.findByEmail(tokenProvider.getId(jwt));
        return Optional.ofNullable(user.getNickname()).orElseThrow(()->new RuntimeException(ERROR_MESSAGE));
    }

    @Override
    public List<String> searchNickName(String nickName) {
       List<User> list = userRepository.findUserByNicknameContaining(nickName);
        log.info("searchNicNameList:{}",list);
        if(list==null||list.isEmpty())
            throw new RuntimeException("조회하신 닉네임이 없습니다.");


        return list
                .stream().map(User::getNickname)
                .collect(Collectors.toList());
    }


}
