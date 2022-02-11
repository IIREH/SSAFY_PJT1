package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Contest;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ContestRepository extends MongoRepository<Contest, ObjectId> {
    @Override
    Contest save(Contest contest);

    Optional<Contest> findById(String id);

    @Override
    void deleteById(ObjectId id);

    Optional<List<Contest>> findAllByNameContaining(String name);

    Page<Contest> findAll(Pageable pageable);
}
