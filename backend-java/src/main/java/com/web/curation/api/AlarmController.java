package com.web.curation.api;

import com.web.curation.model.entity.Alarm;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.AlarmService;
import com.web.curation.model.service.LikePostService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Slf4j
@Api("알림 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/alarm")
public class AlarmController {

    private final AlarmService alarmService;

    @GetMapping("/")
    public ApiUtils.ApiResult<List<Alarm>> getAlarmList(@RequestParam(value = "jwt") String jwt){
        log.info("get AlarmList");
        List<Alarm>value=alarmService.getList(jwt);
        log.info("alarmList size:{}",value);
        return ApiUtils.success(value);
    }

}
