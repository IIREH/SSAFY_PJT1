package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PostRepository extends MongoRepository<Post, ObjectId> {
    @Override
    Post save(Post post);

    Optional<Post> findById(String id);

    Optional<Post> findAllByUser(User user);

    Page<Post> findAll(Pageable pageable);

    void deleteById(String id);

    Optional<User> findByIdAndLikedByListId(String postId, String userId);
}
