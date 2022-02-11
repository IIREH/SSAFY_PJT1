package com.web.curation.model.service;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.AlarmRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService{
    private final AlarmRepository alarmRepository;
    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;

    @Override
    public List getList(String jwt) {
        String email = tokenProvider.getId(jwt);
        User user=userRepository.findByEmail(email);
        List<Alarm> list=alarmRepository.findByUser(user);
        return Optional.of(list).orElseGet(ArrayList::new);
    }
}
