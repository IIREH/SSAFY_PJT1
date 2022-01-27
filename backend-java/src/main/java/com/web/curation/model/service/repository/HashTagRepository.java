package com.web.curation.model.service.repository;

import com.web.curation.model.entity.HashTag;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface HashTagRepository extends MongoRepository<HashTag, ObjectId> {
    @Override
    HashTag save(HashTag hashTag);
}
