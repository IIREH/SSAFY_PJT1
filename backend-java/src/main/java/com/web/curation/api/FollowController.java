package com.web.curation.api;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.FollowService;
import com.web.curation.model.service.UserService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Function;

@Slf4j
@Api("follow 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/follow")
public class FollowController {
     private final FollowService followService;

    @GetMapping("/follower")
    public ApiUtils.ApiResult<List<String>> getFollower(@RequestParam(value = "nickName") String nickName){
        log.info("follower search");

        List <String> value=followService.getList(nickName,User::getFollower,"팔로우쪽 목록 조회 불가능");
        log.info("follower size:{}",value);
        return ApiUtils.success(value);
    }
    @GetMapping("/following")
    public ApiUtils.ApiResult<List<String>> getFollowing(@RequestParam(value = "nickName") String nickName){
        log.info("following search");

        List <String> value=followService.getList(nickName,User::getFollowing,"팔로잉쪽 목록 조회 불가능");
        log.info("following size:{}",value);
        return ApiUtils.success(value);
    }
    @DeleteMapping()
    public ApiUtils.ApiResult<Boolean> removeFollow(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "nickName")String nickName){
        log.info("follow remove");
        boolean value=followService.remove(jwt,nickName,"이미 없어진 팔로우 관계입니다.");
        log.info("follow size:{}",value);
        return ApiUtils.success(value);
    }
    @PostMapping()
    public ApiUtils.ApiResult<Boolean> addFollow(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "nickName")String nickName){
        log.info("follow add");
        boolean value=followService.add(jwt,nickName,"이미 추가된 팔로우 관계입니다.");
        log.info("follow size:{}",value);
        return ApiUtils.success(value);
    }

}
