package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Photo;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PhotoRepository extends MongoRepository<Photo, ObjectId> {
    @Override
    Photo save(Photo photo);

    Optional<Photo> findById(String id);

    @Override
    void delete(Photo photo);

    void deleteById(String id);
}
