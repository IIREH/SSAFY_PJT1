package com.web.curation.model.service.repository;

import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface AlarmRepository extends MongoRepository<Alarm, ObjectId> {
    List<Alarm> findAllByReceivedUser(User receivedUser);
    void deleteAlarmBySendIdAndReceivedUser(String sendIdFrom, User user);
}
