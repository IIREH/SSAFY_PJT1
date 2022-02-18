package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends MongoRepository<Post, ObjectId> {
    @Override
    Post save(Post post);

    Optional<Post> findById(String id);

    List<Post> findAllByUser(User user);

    Page<Post> findAll(Pageable pageable);

    void deleteById(String id);

    Post findByIdAndLikedByListIsContaining(String postId, User user);

    Optional<List<Post>> findByUser(User user, Pageable pageable);

    Optional<List<Post>> findByContentContaining(String word, Pageable pageable);

    Optional<List<Post>> findByContentContainingAndUser(String word, User user, Pageable pageable);
}
