package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends MongoRepository<Comment, ObjectId> {
    @Override
    Comment save(Comment comment);

    @Override
    Optional<Comment> findById(ObjectId objectId);

    Optional<Comment> findAllByUser(User user);

    @Override
    void deleteById(ObjectId id);

    @Override
    void deleteAll(Iterable<? extends Comment> comments);
}
