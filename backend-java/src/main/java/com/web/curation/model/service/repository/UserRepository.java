package com.web.curation.model.service.repository;

import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmailOrNickname(String email,String nickname);
    User findByNickname(String nickname);
    User findByEmail(String email);

    //TODO 안쓸것같음.(삭제에정)
    @Override
    List<User> findAll();
    Optional<User> findById(String objectId);
    void deleteById(String objectId);
    @Override
    <S extends User> S insert(S entity);
    @Override
    User save(User user);

}
