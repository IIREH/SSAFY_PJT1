package com.web.curation.model.mapper;

import com.web.curation.model.dto.PostDto;
import com.web.curation.model.entity.HashTag;
import com.web.curation.model.entity.Post;
import com.web.curation.model.service.CommentService;
import com.web.curation.model.service.ContestService;
import com.web.curation.model.service.PhotoService;
import com.web.curation.model.service.UserServiceImpl;
import com.web.curation.model.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
// TODO: Component로 등록 안하고 singleton으로 하면 AutoWired가 못잡아주는데 원인 찾기
public class PostMapper {
    @Autowired
    ContestService contestService;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    PhotoService photoService;
    @Autowired
    CommentService commentService;
    @Autowired
    UserRepository userRepository;

//    private static PostMapper postMapper = new PostMapper();
//
//    public static PostMapper getInstance() {
//        return postMapper;
//    }
//
//    private PostMapper() {
//
//    }

    // TODO: validation
    public Post toEntity(PostDto postDto) {
        Post post = Post.builder()
                .id(postDto.getId())
                .contest(contestService.getContestById(postDto.getContestId()))
                .user(userRepository.findByEmail(postDto.getUserEmail()))
                .writeDate(postDto.getWriteDate())
                .content(postDto.getContent())
                .photo(photoService.getPhoto(postDto.getPhotoId()))
                .likedByList(Optional.ofNullable(postDto.getLikedByList()).orElse(new ArrayList<>())
                        .stream().map(u -> userRepository.findByEmail(u))
                        .collect(Collectors.toList()))
                .hashTags(Optional.ofNullable(postDto.getHashTags()).orElse(new ArrayList<>())
                        .stream().map(ht -> new HashTag(ht))
                        .collect(Collectors.toList()))
                .comments(Optional.ofNullable(postDto.getCommentIds()).orElse(new ArrayList<>())
                        .stream().map(c -> commentService.findCommentById(c))
                        .collect(Collectors.toList()))
                .build();

        return post;
    }

    public PostDto toDto(Post post) {
        PostDto postDto = PostDto.builder()
                .id(post.getId())
                .contestId(post.getContest().getId())
                .userEmail(post.getUser().getEmail())
                .content(post.getContent())
                .photoId(post.getPhoto().getId())
                .hashTags(Optional.ofNullable(post.getHashTags()).orElseGet(Collections::emptyList)
                        .stream().map(ht -> ht.getHashTag())
                        .collect(Collectors.toList()))
                .commentIds(Optional.ofNullable(post.getHashTags()).orElseGet(Collections::emptyList)
                        .stream().map(ht -> ht.getHashTag())
                        .collect(Collectors.toList()))
                .likedByList(Optional.ofNullable(post.getLikedByList()).orElseGet(Collections::emptyList)
                        .stream().map(u -> u.getEmail())
                        .collect(Collectors.toList()))
                .writeDate(post.getWriteDate())
                .build();

        return postDto;
    }
}
