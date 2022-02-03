package com.web.curation.model.service.repository;

import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    @Override
    User save(User user);

    @Override
    List<User> findAll();

    List<User> findByEmail(String email);

    Optional<User> findById(String objectId);

    void deleteById(String objectId);
}
