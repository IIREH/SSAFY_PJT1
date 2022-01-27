package com.web.curation.model.service.repository;

import com.web.curation.model.entity.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity, ObjectId> {
    @Override
    UserEntity save(UserEntity userEntity);

    @Override
    List<UserEntity> findAll();

    List<UserEntity> findByEmail(String email);

    @Override
    Optional<UserEntity> findById(ObjectId objectId);

    @Override
    void deleteById(ObjectId objectId);
}
