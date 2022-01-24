package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Post;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PostRepository extends MongoRepository<Post, ObjectId> {
    @Override
    Post insert(Post post);

    @Override
    Optional<Post> findById(ObjectId id);

    @Override
    void deleteById(ObjectId id);
}
