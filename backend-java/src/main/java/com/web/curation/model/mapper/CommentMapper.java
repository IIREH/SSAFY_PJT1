package com.web.curation.model.mapper;

import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.entity.Comment;
import com.web.curation.model.service.UserServiceImpl;
import com.web.curation.model.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    UserRepository userRepository;

    // TODO: validation
    public Comment toEntity(CommentDto commentDto) {
        Comment comment = Comment.builder()
                .id(commentDto.getId())
                .user(userRepository.findByEmail(commentDto.getUserEmail()))
                .writeDate(commentDto.getWriteDate())
                .content(commentDto.getContent())
                .build();

        return comment;
    }

    public CommentDto toDto(Comment comment) {
        CommentDto commentDto = CommentDto.builder()
                .id(comment.getId())
                .userEmail(comment.getUser().getEmail())
                .writeDate(comment.getWriteDate())
                .content(comment.getContent())
                .build();

        return commentDto;
    }
}
