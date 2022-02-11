package com.web.curation.model.service;

import com.web.curation.model.entity.Comment;
import com.web.curation.model.service.repository.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@SuppressWarnings("ALL")
@Slf4j
@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;

    public Comment findCommentById(String CommentId) {
        return commentRepository.findById(CommentId).orElseGet(null);
    }
}
