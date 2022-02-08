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
    private final UserService userService;
    private final FollowService followService;

    @GetMapping("/follower")
    public ApiUtils.ApiResult<List<String>> getFollower(@RequestParam(value = "jwt") String jwt){
        log.info("follower search");
        final String errMsg ="팔로우쪽 목록 조회 불가능";
        List <String> value=followService.getFollow(jwt,User::getFollower,errMsg);
        log.info("follower size:{}",value);
        return ApiUtils.success(value);
    }
    @GetMapping("/followee")
    public ApiUtils.ApiResult<List<String>> getFollowee(@RequestParam(value = "jwt") String jwt){
        log.info("followee search");
        final String errMsg ="팔로잉쪽 목록 조회 불가능";

        List <String> value=followService.getFollow(jwt,User::getFollowing,errMsg);
        log.info("followee size:{}",value);
        return ApiUtils.success(value);
    }
    @DeleteMapping()
    public ApiUtils.ApiResult<List<String>> removeFollow(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "nickName")String nickName){
        log.info("follow remove");
        List <String> value=followService.removeFollow(jwt,nickName);
        log.info("follow size:{}",value);
        return ApiUtils.success(value);
    }
    @PostMapping()
    public ApiUtils.ApiResult<List<String>> addFollow(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "nickName")String nickName){
        log.info("follow add");
        List <String> value=followService.addFollow(jwt,nickName);
        log.info("follow size:{}",value);
        return ApiUtils.success(value);
    }

}
