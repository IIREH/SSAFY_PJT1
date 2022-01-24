package com.web.curation.model.service.repository;

import com.web.curation.model.entity.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<UserEntity, ObjectId> {
    @Override
    UserEntity insert(UserEntity user);

    @Override
    List<UserEntity> findAll();

    List<UserEntity>findByEmail(String email);
}
