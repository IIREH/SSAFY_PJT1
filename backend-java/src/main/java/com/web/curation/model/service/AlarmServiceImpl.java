package com.web.curation.model.service;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.AlarmRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService{
    private final AlarmRepository alarmRepository;
    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;
    @Override
    public void addAlarm(User sendUser, String sendId, String sendType, String path) {
        sendUser.getFollower().stream()
                .map(userRepository::findByEmail)
                .map(receivedUser->Alarm.builder()
                        .receivedUser(receivedUser)
                        .sendId(sendId)
                        .expireAt(LocalDate.now())
                        .sendType(sendType)
                        .build())
                .forEach(alarmRepository::save);
    }

    @Override
    public void removeAlarm(User sendUser, String sendId) {
        sendUser.getFollower().stream()
                .map(userRepository::findByEmail)
                .forEach(receivedUser -> alarmRepository.deleteAlarmBySendIdAndReceivedUser(sendId, receivedUser));
    }

    @Override
    public List<Alarm> getList(String jwt) {
        String email=tokenProvider.getId(jwt);
        List<Alarm> alarmList=alarmRepository.findAllByReceivedUser(userRepository.findByEmail(email));
        if(alarmList==null||alarmList.isEmpty())
            alarmList=new ArrayList<>();

        return alarmList;
    }

}
