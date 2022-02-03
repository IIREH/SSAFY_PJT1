package com.web.curation.model.service.repository;

import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmailOrNickname(String email,String nickname);
    User findByEmail(String email);
    @Override
    <S extends User> S insert(S entity);
}
