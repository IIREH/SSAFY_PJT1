package com.web.curation.api;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.entity.Post;
import com.web.curation.model.service.PostService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ApiUtils.ApiResult<?> writePost(@RequestBody PostDto postDto) {
        Post post = postservice.writePost(postDto);

        if(post == null) {
            return ApiUtils.error("공연이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        return ApiUtils.success(post.getId());
    }

    @ApiOperation(value = "글 목록 조회", notes = "게시글 목록 조회, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @GetMapping("/")
    public ApiUtils.ApiResult<?> listPost(@ApiParam(value = "가져올 페이지 정보", required = true) Pageable pageable) {
        List<Post> posts = postservice.listPost(pageable);

        if(posts == null) {
            return ApiUtils.error("게시글을 찾을 수 없습니다.", HttpStatus.NO_CONTENT);
        }

        return ApiUtils.success(posts);
    }

    @ApiOperation(value = "글수정", notes = "기존 게시글 수정, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PutMapping("/")
    public ApiUtils.ApiResult<?> updatePost(@RequestBody @ApiParam(value = "게시글 정보", required = true) PostDto postDto) {
        if(postservice.updatePost(postDto) == null) {
            return ApiUtils.error("행사나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("");
    }

    @ApiOperation(value = "글삭제", notes = "게시글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}")
    public ApiUtils.ApiResult<?> deletePost(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId) {
        if(postservice.deletePost(postId) == false) {
            return ApiUtils.error("게시글을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }


    @ApiOperation(value = "댓글 작성", notes = "새 댓글 작성, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("/{postId}")
    public ApiUtils.ApiResult<?> writeComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                              @RequestBody @ApiParam(value = "댓글 정보", required = true) CommentDto commentDto) {
        if(postservice.writeComment(postId, commentDto) == null) {
            return ApiUtils.error("게시글이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "댓글 수정", notes = "기존 댓글 수정, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PutMapping("/{postId}/")
    public ApiUtils.ApiResult<?> updateComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                              @RequestBody @ApiParam(value = "댓글 정보", required = true) CommentDto commentDto) {
        if(postservice.updateComment(postId, commentDto) == null) {
            return ApiUtils.error("게시글이나 댓글을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}/{commentId}")
    public ApiUtils.ApiResult<?> deleteComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                               @PathVariable("commentId") @ApiParam(value = "댓글 ID", required = true) String commentId) {
        if(postservice.deleteComment(postId, commentId) == false) {
            return ApiUtils.error("게시글이나 코멘트를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }

    @ApiOperation(value = "좋아요 클릭", notes = "좋아요 설정 <-> 해제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("/{postId}/like")
    public ApiUtils.ApiResult<?> clickLikeButton(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                               @RequestParam("userId") @ApiParam(value = "유저 ID", required = true) String userId) {
        if(postservice.clickLikeButton(postId, userId) == false) {
            return ApiUtils.error("게시글이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }
}
