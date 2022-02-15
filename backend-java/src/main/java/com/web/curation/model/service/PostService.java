package com.web.curation.model.service;

import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.entity.*;
import com.web.curation.model.service.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Slf4j
@Service
public class PostService {
    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    HashTagRepository hashTagRepository;

    @Autowired
    ContestRepository contestRepository;

    @Autowired
    PhotoService photoService;

    @Autowired
    UserRepository userRepository;
    @Autowired
    CommentMapper commentMapper;
    @Autowired
    AlarmService alarmService;

    @Value("${frontend.alarm.post}")
    private String postType;
    @Value("${frontend.alarm.postPath}")
    private String postPath;

    @Value("${frontend.alarm.comment}")
    private String commentType;
    @Value("${frontend.alarm.commentPath}")
    private String commentPath;


    public Post writePost(PostDto postDto) throws IOException {
        // TODO: PostDto class에서 처리할까?
//        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
//        User user = userRepository.findByEmail(postDto.getUserEmail());
//
//        if(contestOrNull.isPresent() == false || user == null) {
//            return null;
//        }
//
//        List<HashTag> hashTags = new ArrayList<>();
//        Optional.ofNullable(postDto.getHashTags()).orElseGet(Collections::emptyList)
//                .stream().map(ht -> hashTags.add(hashTagRepository.save(new HashTag(ht))))
//                .collect(Collectors.toList());
//
////        postDto.getHashTags().stream()
////                .reduce(hashTags, ht -> hashTags.add(hashTagRepository.save(new HashTag(ht))))
////                .collect(Collectors.toList());
////        if(postDto.getHashTags() != null) {
////            for(String ht : postDto.getHashTags()) {
////                HashTag hashTag = HashTag.builder()
////                        .hashTag(ht)
////                        .build();
////                hashTagRepository.save(hashTag);
////
////                hashTags.add(hashTag);
////            }
////        }
//
//        Photo photo = photoService.getPhoto(postDto.getPhotoId());
//        Post post = Post.builder()
//                .contest(contestOrNull.get())
//                .user(user)
//                .content(postDto.getContent())
//                .photo(photo)
//                .hashTags(hashTags)
//                .hashTags(hashTags)
//                .build();
        Post post = postMapper.toEntity(postDto);
        alarmService.addAlarm(
                post.getUser()
                , postDto.getId()
                , postType
                , postPath + post.getId()
        );

        return postRepository.save(post);
    }

    public List<Post> listPost(Pageable pageable) {
        List<Post> posts = postRepository.findAll(pageable).getContent();
        return posts == null ? null : posts;
    }

    public Post updatePost(PostDto postDto) {
        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
        Optional<Post> postOrNull = postRepository.findById(postDto.getId());

        if(contestOrNull.isPresent() == false || postOrNull.isPresent() == false) {
            return null;
        }

        List<HashTag> hashTags = new ArrayList<>();
        if(postDto.getHashTags() != null) {
            for (String ht : postDto.getHashTags()) {
                HashTag hashTag = HashTag.builder()
                        .hashTag(ht)
                        .build();
                hashTagRepository.save(hashTag);

                hashTags.add(hashTag);
            }
        }

        Post post = postOrNull.get();
        post.setContent(postDto.getContent());
        post.setContest(contestOrNull.get());
        post.setHashTags(hashTags);
        post.setPhoto(photoService.getPhoto(postDto.getPhotoId()));
        return postRepository.save(post);
    }

    public boolean deletePost(String postId) {
        Optional<Post> postOrNull = postRepository.findById(postId);
        if(postOrNull.isPresent() == false) {
            return false;
        }

        Post post = postOrNull.get();
        List<Comment> comments = post.getComments();
        if (comments != null) {
            commentRepository.deleteAll(comments);
        }
        photoService.removePhoto(post.getPhoto());
        postRepository.deleteById(postId);

        alarmService.removeAlarm(
                post.getUser()
                , post.getId()
        );

        return true;
    }

    public boolean clickLikeButton(String postId, String userId) {
        Optional<Post> postOrNull = postRepository.findById(postId);
        Optional<User> userOrNull = userRepository.findById(userId);
        if(postOrNull.isPresent() == false || userOrNull.isPresent() == false) {
            return false;
        }

        Post post = postOrNull.get();
        User user = userOrNull.get();
        List<User> likedByList = post.getLikedByList() == null ? new ArrayList<>() : post.getLikedByList();
//        Optional<User> user = postRepository.findByIdAndLikedByListId(postId, userId);
//        for(User u : likedByList) {
//            if(u.getId().equals(userId) == false) {
//                continue;
//            }
//            likedByList.remove(user);
//        }

        if(likedByList.contains(user)) {
            likedByList.remove(user);
        } else if(likedByList.contains(user) == false) {
            likedByList.add(user);
        }
//        post.setLikedByList(likedByList);
        postRepository.save(post);
        return true;
    }

    public Comment writeComment(String postId, CommentDto commentDto) {
        Optional<Post> postOrNull = postRepository.findById(postId);
        Optional<User> userOrNull = userRepository.findById(commentDto.getUserId());

        if(postOrNull.isPresent() == false || userOrNull.isPresent() == false) {
            return null;
        }

        Comment comment = Comment.builder()
                .user(userOrNull.get())
                .content(commentDto.getContent())
                .build();

        commentRepository.save(comment);
        Post post = postOrNull.get();
        List<Comment> comments = post.getComments() == null ? new ArrayList<>() : post.getComments();
        comments.add(comment);
        post.setComments(comments);
        postRepository.save(post);
        alarmService.addAlarm(
                comment.getUser()
                , comment.getId()
                , commentType
                , commentPath + comment.getId()
        );

        return comment;
    }

    public Comment updateComment(String postId, CommentDto commentDto) {
        Optional<Post> postOrNull = postRepository.findById(postId);
        Optional<Comment> commentOrNull = commentRepository.findById(commentDto.getId());

        if(postOrNull.isPresent() == false || commentOrNull.isPresent() == false) {
            return null;
        }

        Comment comment = commentOrNull.get();
        comment.setContent(comment.getContent());
        commentRepository.save(comment);
        return comment;
    }

    public boolean deleteComment(String postId, String commentId) {
        Optional<Comment> commentOrNull = commentRepository.findById(commentId);
        Optional<Post> postOrNull = postRepository.findById(postId);
        if(commentOrNull.isPresent() == false || postOrNull.isPresent() == false) {
            return false;
        }


        Post post = postOptional.get();
        post.getComments().removeIf(c -> commentId.equals(c.getId()));
//        List<Comment> comments = post.getComments();
//        for(Comment c : comments) {
//            if(c.getId().equals(commentId)) {
//                comments.remove(c);
//                break;
//            }
//        }
//        post.setComments(comments);
        alarmService.removeAlarm(commentOptional.get().getUser(),commentOptional.get().getId());
        postRepository.save(post);
        commentRepository.deleteById(commentId);

        return true;
    }
}
