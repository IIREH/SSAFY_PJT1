package com.web.curation.model.service;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class FollowerServiceImpl implements FollowService{
    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;

    @Override
    public List<String> getList(String jwt, Function<User, List<String>> mapper,String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);

        //안타깝게도 java8은 여기서 stream을 바로못씀. 자바 버전이 오르면,stream 내장해서 ㄱㄱ.
        List<String> followEmails = Optional.ofNullable(user)
                .map(mapper)
                .orElseGet(ArrayList::new);

        return followEmails.stream().map(x->userRepository.findByEmail(x).getNickname()).collect(Collectors.toList());
    }

    @Override
    public boolean add(String jwt, String nickName,String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);
        User follower = userRepository.findByEmailOrNickname("garage",nickName);
        log.info("user:{}",user);
        log.info("follow:{}",follower);

        String followerEmail=follower.getEmail();

        boolean isContain=user.getFollowing().parallelStream().anyMatch(x->x.equals(followerEmail));
        if(isContain)
            throw new RuntimeException(errMsg);
        user.getFollowing().add(followerEmail);
        follower.getFollower().add(email);
        userRepository.save(user);
        userRepository.save(follower);
        return true;
    }

    @Override
    public boolean remove(String jwt,String nickName,String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);
        User follower = userRepository.findByEmailOrNickname("garage",nickName);
        log.info("user:{}",user);
        log.info("follow:{}",follower);

        String followerEmail=follower.getEmail();
        boolean isContains=user.getFollowing().parallelStream().anyMatch(x->x.equals(followerEmail));

        if(!isContains)
            throw new RuntimeException(errMsg);
        user.getFollowing().remove(followerEmail);
        follower.getFollower().remove(email);

        userRepository.save(user);
        userRepository.save(follower);

        return true;
    }

        //리펙토링 실패(깔끔하게 안되네....?)
    //    private List<String> changeFollow(String jwt, String nickName,Predicate<List<String>>isError,String errorMsg,Consumer<List<String>>consumer){
//        String email=tokenProvider.getId(jwt);
//        User user =userRepository.findByEmail(email);
//        User follower = userRepository.findByEmailOrNickname("garage",nickName);
//        String followerEmail=follower.getEmail();
//       if(isError.test(user.getFollower()))
//           throw new RuntimeException(errorMsg);
//
//       consumer.accept(user.getFollower());
//       consumer.accept(follower.getFollowee());
//        userRepository.save(user);
//        userRepository.save(follower);
//        return user.getFollower();
//    }

}
