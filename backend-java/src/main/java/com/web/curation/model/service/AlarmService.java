package com.web.curation.model.service;

import com.web.curation.model.entity.Alarm;

import java.util.List;

public interface AlarmService {
    List<Alarm> getList(String jwt);
}
