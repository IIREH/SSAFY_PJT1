package com.web.curation.model.service;

import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.AlarmRepository;

import java.time.LocalDate;

public interface WantedAlarmService {
    default void addAlarm(User user , String idPointer, String msg, String path, AlarmRepository alarmRepository){
       Alarm alarm= Alarm.builder()
                .user(user)
                .expireAt(LocalDate.now())
                .msg(msg)
                .build();
        alarmRepository.save(alarm);
    }
    default void removeAlarm(AlarmRepository alarmRepository){

    }
}
