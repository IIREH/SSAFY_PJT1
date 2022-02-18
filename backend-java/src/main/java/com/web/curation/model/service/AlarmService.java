package com.web.curation.model.service;

import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.User;
import org.bson.types.ObjectId;

import java.util.List;

public interface AlarmService {
    void addAlarm(User sendUser, String sendId, String sendType, String path);
    void removeAlarm(User sendUser,String sendId);
    List<Alarm> getList(String jwt);

}
