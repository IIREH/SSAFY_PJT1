package com.web.curation.api;

import com.web.curation.exception.UnauthorizedException;
import com.web.curation.jwt.JwtFilter;
import com.web.curation.jwt.Token;
import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.service.PostService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@Slf4j
@Api("게시글 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    PostService postservice;

    @ApiOperation(value = "글작성", notes = "새 게시글 작성, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("/")
    public ApiUtils.ApiResult<?> writePost(@RequestBody @ApiParam(value = "게시글 정보", required = true) PostDto postDto) {
        if(postservice.writePost(postDto) == null) {
//            return ApiUtils.error("wrong contest or user", new HttpStatus(500, HttpStatus.Series.SERVER_ERROR, "wrong contest or user"));
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "글수정", notes = "기존 게시글 수정, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PutMapping("/")
    public ApiUtils.ApiResult<?> updatePost(@RequestBody @ApiParam(value = "게시글 정보", required = true) PostDto postDto) {
        if(postservice.updatePost(postDto) == null) {
//            return ApiUtils.error("wrong contest or user", new HttpStatus(500, HttpStatus.Series.SERVER_ERROR, "wrong contest or user"));
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "글삭제", notes = "게시글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}")
    public ApiUtils.ApiResult<?> deletePost(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) ObjectId postId) {
        if(postservice.deletePost(postId) == false) {
//            return ApiUtils.error("wrong contest or user", new HttpStatus(500, HttpStatus.Series.SERVER_ERROR, "wrong contest or user"));
        }
        return ApiUtils.success("success");
    }


    @ApiOperation(value = "댓글 작성", notes = "새 댓글 작성, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("/{postId}")
    public ApiUtils.ApiResult<?> writeComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) ObjectId postId,
                                              @RequestBody @ApiParam(value = "댓글 정보", required = true) CommentDto commentDto) {
        if(postservice.writeComment(postId, commentDto) == null) {
//            return ApiUtils.error("wrong contest or user", new HttpStatus(500, HttpStatus.Series.SERVER_ERROR, "wrong contest or user"));
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}/{commentId}")
    public ApiUtils.ApiResult<?> deleteComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) ObjectId postId,
                                               @PathVariable("commentId") @ApiParam(value = "댓글 ID", required = true) ObjectId commentId) {
        if(postservice.deleteComment(postId, commentId) == false) {
//            return ApiUtils.error("wrong contest or user", new HttpStatus(500, HttpStatus.Series.SERVER_ERROR, "wrong contest or user"));
        }
        return ApiUtils.success("success");
    }
}
