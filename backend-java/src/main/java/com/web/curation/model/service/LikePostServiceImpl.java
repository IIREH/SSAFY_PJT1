package com.web.curation.model.service;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.PostRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.util.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LikePostServiceImpl implements LikePostService{
    private final TokenProvider tokenProvider;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Override
    public boolean add(String jwt, String postId,String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);
        //"이미 좋아요 누른 글입니다.";

        Post post=postRepository.findById(postId).orElseThrow(()->new RuntimeException(errMsg));
        if(post.getLikedByList().parallelStream().anyMatch(x->x.getId().equals(user.getId())))
            throw new RuntimeException("자추는 금지...");

        log.info("likePost add Service post:{}",post);
        post.getLikedByList().add(user);
        user.getLikePost().add(post.getId());
        postRepository.save(post);
        userRepository.save(user);

        return true;
    }

    @Override
    public boolean remove(String jwt, String postId, String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);
        //"이미 좋아요 누른 글입니다.";

        Post post=postRepository.findByIdAndLikedByListIsContaining(postId,user);
        if(post==null)
            throw new RuntimeException(errMsg);

        log.info("before likePost remove Service post:{}",post.getLikedByList());
        post.getLikedByList().removeIf(x->x.getId().equals(user.getId()));
        user.getLikePost().remove(post.getId());
        log.info("after likePost remove Service post:{}",post.getLikedByList());

        postRepository.save(post);
        userRepository.save(user);

        return true;
    }

    @Override
    public List<Post> searchLikeList(String nickName) {
       User user= userRepository.findByEmailOrNickname("garage",nickName);
       List <Post> list = new ArrayList<>();
       try {

           list=user.getLikePost().stream()
                   .map(postRepository::findById)
                   .map(x->x.get())
                   .collect(Collectors.toList());
       }catch (NoSuchElementException e){
            log.info("좋아요 누른 글없음");
       }catch (NullPointerException e){
           log.info("없는 회원 조회");
       }

        return list;
    }

    @Override
    public List<Post> getList(String jwt, Function<User, List<String>> mapper, String errMsg) {
        String email=tokenProvider.getId(jwt);
        User user =userRepository.findByEmail(email);

        //안타깝게도 java8은 여기서 stream을 바로못씀. 자바 버전이 오르면,stream 내장해서 ㄱㄱ.
        List<String> postIds = Optional.ofNullable(user)
                .map(mapper)
                .orElseGet(ArrayList::new);

        return postIds.stream()
                .map(x->userRepository.findByEmail(x))
                .map(x->postRepository.findAllByUser(x))
                .flatMap(x->x.stream())
                .collect(Collectors.toList());
    }


}
