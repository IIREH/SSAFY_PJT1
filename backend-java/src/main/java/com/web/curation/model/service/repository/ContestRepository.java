package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Contest;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContestRepository extends MongoRepository<Contest, ObjectId>{

}
