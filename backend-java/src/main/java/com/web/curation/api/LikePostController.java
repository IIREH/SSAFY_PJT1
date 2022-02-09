package com.web.curation.api;

import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.LikePostService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Api("좋아요 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/likePost")
public class LikePostController {
    //좋아요 cd, 검색
    private final LikePostService likePostService;

    @GetMapping("/following")
    public ApiUtils.ApiResult<List<Post>> getLikePost(@RequestParam(value = "jwt") String jwt){
        log.info("my following likePost search");
        final String errMsg ="팔로잉의 좋아요 목록 조회 불가능";

        List <Post> value=likePostService.getList(jwt, User::getFollowing,errMsg);
        log.info("following size:{}",value);
        return ApiUtils.success(value);
    }
    @GetMapping("/search")
    public ApiUtils.ApiResult<List<Post>> searchLikePost(@RequestParam(value = "nickName")String nickName ){
        log.info("likePost search");
        List <Post> value=likePostService.searchLikeList(nickName);
        log.info("search size:{}",value);
        return ApiUtils.success(value);
    }

    @DeleteMapping()
    public ApiUtils.ApiResult<Boolean> removeLikePost(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "postId")String postId){
        log.info("likePost remove");
        boolean value=likePostService.remove(jwt,postId,"이미 없앤 좋아요입니다.");
        log.info("likePost size:{}",value);
        return ApiUtils.success(value);
    }
    @PostMapping()
    public ApiUtils.ApiResult<Boolean> addLikePost(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "postId")String postId){
        log.info("likePost add");
        boolean value=likePostService.add(jwt,postId,"이미 추가한 좋아요입니다.");
        log.info("likePost size:{}",value);
        return ApiUtils.success(value);
    }

}
