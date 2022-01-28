package com.web.curation.model.service;

import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.CommentRepository;
import com.web.curation.model.service.repository.ContestRepository;
import com.web.curation.model.service.repository.PostRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class PostService {
    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ContestRepository contestRepository;

    @Autowired
    UserRepository userRepository;

    public Post writePost(PostDto postDto) {
        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
        Optional<User> userOrNull = userRepository.findById(postDto.getUserId());

        if(contestOrNull.isPresent() == false || userOrNull.isPresent() == false) {
            return null;
        }
//        TODO: hashTag가 기존에 없던 것일 수 있으니 추가하는 작업
        Post post = Post.builder()
                .contest(contestOrNull.get())
                .user(userOrNull.get())
                .content(postDto.getContent())
                .hashTags(postDto.getHashTags())
                .build();

        return postRepository.save(post);
    }

    public Post updatePost(PostDto postDto) {
        Optional<Contest> contestOrNull = contestRepository.findById(postDto.getContestId());
        Optional<Post> postOrNull = postRepository.findById(postDto.getId());

        if(contestOrNull.isPresent() == false || postOrNull.isPresent() == false) {
            return null;
        }

//        List<Comment> comments = new ArrayList<>();
//        List<ObjectId> commentIds = postDto.getComments();
//        if(commentIds != null) {
//            for(ObjectId id : postDto.getComments()) {
//                comments.add(commentRepository.findById(id).get());
//            }
//        }
//
//        List<User> likedByList = new ArrayList<>();
//        List<ObjectId> likedByIdList = postDto.getComments();
//        if(likedByIdList != null) {
//            for (ObjectId id : postDto.getLikedByList()) {
//                likedByList.add(userRepository.findById(id).get());
//            }
//        }
//
//        Post post = Post.builder()
//                .id(postDto.getId())
//                .contest(contestOrNull.get())
//                .user(userOrNull.get())
//                .content(postDto.getContent())
//                .likedByList(likedByList)
//                .hashTags(postDto.getHashTags())
//                .comments(comments)
//                .build();
//        TODO: hashTag가 기존에 없던 것일 수 있으니 추가하는 작업
        Post post = postOrNull.get();
        post.setContent(postDto.getContent());
        post.setContest(contestOrNull.get());
        return postRepository.save(post);
    }

    public boolean deletePost(ObjectId id) {
        Optional<Post> postOrNull = postRepository.findById(id);
        if(postOrNull.isPresent() == false) {
            return false;
        }

        List<Comment> comments = postOrNull.get().getComments();
        if(comments != null) {
            commentRepository.deleteAll(comments);
        }
        postRepository.deleteById(id);
        return true;
    }

    public Comment writeComment(ObjectId objectId, CommentDto commentDto) {
        Optional<Post> postOrNull = postRepository.findById(objectId);
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
        return comment;
    }

    public boolean deleteComment(ObjectId postId, ObjectId commentId) {
        Optional<Comment> commentOrNull = commentRepository.findById(commentId);
        Optional<Post> postOrNull = postRepository.findById(postId);
        if(commentOrNull.isPresent() == false || postOrNull.isPresent() == false) {
            return false;
        }

        commentRepository.deleteById(commentId);
        Post post = postOrNull.get();
        List<Comment> comments = post.getComments();
        for(Comment c : comments) {
            if(c.getId().equals(commentId)) {
                comments.remove(c);
                break;
            }
        }
        post.setComments(comments);
        postRepository.save(post);
        return true;
    }
}
