package com.web.curation.model.service;

import com.web.curation.model.mapper.CommentMapper;
import com.web.curation.model.mapper.PostMapper;
import com.web.curation.model.dto.*;
import com.web.curation.model.entity.*;
import com.web.curation.model.service.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

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
    UserServiceImpl userService;

    @Autowired
    UserRepository userRepository;
    @Autowired
    CommentMapper commentMapper;
    @Autowired
    PostMapper postMapper;

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



//    static PostMapper postMapper = PostMapper.getInstance();

    public Post writePost(PostDto postDto) throws IOException {
        // TODO: PostDto class에서 처리할까?
//        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
//        User user = userRepository.findByEmail(postDto.getUserEmail());
//
//        if(contestOrNull.isPresent() == false || user == null) {
//            return null;
//        }
//
        List<HashTag> hashTags = new ArrayList<>();
        Optional.ofNullable(postDto.getHashTags()).orElseGet(Collections::emptyList)
                .stream().map(ht -> hashTagRepository.save(new HashTag(ht)))
                .collect(Collectors.toList());

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

    public List<Post> searchByUser(String userEmail, Pageable pageable) {
        User user = userRepository.findByEmail(userEmail);
        // TODO: Try findAllByUserUserEmail, etc.
        return postRepository.findByUser(user, pageable).orElseGet(Collections::emptyList);
    }

    public List<Post> searchByContentContaining(String word, Pageable pageable) {
        return postRepository.findByContentContaining(word, pageable).orElseGet(Collections::emptyList);
    }

    public List<Post> searchByContentAndUser(String word, String userEmail, Pageable pageable) {
        User user = userRepository.findByEmail(userEmail);
        return postRepository.findByContentContainingAndUser(word, user, pageable).orElseGet(Collections::emptyList);
    }

    public PostDto getPost(String postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        return postOptional.map(postMapper::toDto).orElse(null);
////        List<String> hashTags = new ArrayList<>();
//        List<String> hashTags = Optional.ofNullable(post.getHashTags()).orElseGet(Collections::emptyList)
//                .stream().map(ht -> ht.getHashTag())
//                .collect(Collectors.toList());
////        if(post.getHashTags() != null) {
////            for(HashTag ht : post.getHashTags()) {
////                hashTags.add(ht.getHashTag());
////            }
////        }
//
//        PostDto postViewDto = new PostDto(post);
//        return postViewDto;
    }

    public Post updatePost(String postId, PostDto postDto) {
//        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
//        Optional<Post> postOrNul l = postRepository.findById(postId);
//
//        if(contestOrNull.isPresent() == false || postOrNull.isPresent() == false) {
//            return null;
//        }
//
//        List<HashTag> hashTags = new ArrayList<>();
//        if(postDto.getHashTags() != null) {
//            for (String ht : postDto.getHashTags()) {
//                HashTag hashTag = HashTag.builder()
//                        .hashTag(ht)
//                        .build();
//                hashTagRepository.save(hashTag);
//
//                hashTags.add(hashTag);
//            }
//        }
//
//        Post post = postOrNull.get();
//        post.setContent(postDto.getContent());
//        post.setContest(contestOrNull.get());
//        post.setHashTags(hashTags);
//        post.setPhoto(photoService.getPhoto(postDto.getPhotoId()));
//        return postRepository.save(post);
        Post post = postMapper.toEntity(postDto);
        // TODO: remove image from db if photo is changed
        return postRepository.save(post);
    }

    public boolean deletePost(String postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if(postOptional.isPresent() == false) {
            return false;
        }

        Post post = postOptional.get();
        List<Comment> comments = post.getComments();
        if (comments != null) {
            commentRepository.deleteAll(comments);
        }
        photoService.removePhoto(post.getPhoto());
        postRepository.delete(post);

        alarmService.removeAlarm(
                post.getUser()
                , post.getId()
        );

        return true;
    }

//    public boolean toggleLike(String postId, String userEmail) {
//        Optional<Post> postOptional = postRepository.findById(postId);
//        User user = userRepository.findByEmail(userEmail);
//        if(postOptional.isPresent() == false || user == null) {
//            return false;
//        }
//
//        Post post = postOptional.get();
//        List<User> likedByList;
//        if(post.getLikedByList() == null) {
//            likedByList = new ArrayList<>();
//            post.setLikedByList(likedByList);
//        } else {
//            likedByList = post.getLikedByList();
//        }
//
//        if(likedByList.stream().anyMatch(u -> u.getEmail().equals(userEmail))) {
//            likedByList.remove(user);
//        } else {
//            likedByList.add(user);
//        }
////        if(likedByList.contains(user)) {
////            likedByList.remove(user);
////        } else {
////            likedByList.add(user);
////        }
//
//        postRepository.save(post);
//        return true;
//    }

    public Comment writeComment(String postId, CommentDto commentDto) {
        // TODO: User 검증은 CommentDto에서 처리할까?
        Optional<Post> postOptional = postRepository.findById(postId);
        User user = userRepository.findByEmail(commentDto.getUserEmail());

        if(postOptional.isPresent() == false || user == null) {
            return null;
        }

        Comment comment = commentMapper.toEntity(commentDto);
        commentRepository.save(comment);

        Post post = postOptional.get();
        List<Comment> comments = post.getComments();
        comments.add(comment);
        postRepository.save(post);
        alarmService.addAlarm(
                comment.getUser()
                , comment.getId()
                , commentType
                , commentPath + comment.getId()
        );

        return comment;
    }

    public Comment updateComment(String postId, String commentId, CommentDto commentDto) {
        Optional<Post> postOptional = postRepository.findById(postId);
        Optional<Comment> commentOptional = commentRepository.findById(commentId);

        if(postOptional.isPresent() == false || commentOptional.isPresent() == false) {
            return null;
        }

        Comment comment = commentOptional.get();
        Comment commentUpdated = Comment.builder()
                .id(comment.getId())
                .user(comment.getUser())
                .content(commentDto.getContent())
                .writeDate(comment.getWriteDate())
                .build();

        commentRepository.save(commentUpdated);
        return comment;
    }

    public boolean deleteComment(String postId, String commentId) {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        Optional<Post> postOptional = postRepository.findById(postId);
        if(commentOptional.isPresent() == false || postOptional.isPresent() == false) {
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
