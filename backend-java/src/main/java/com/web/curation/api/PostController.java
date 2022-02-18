package com.web.curation.api;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.*;
import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.mapper.CommentMapper;
import com.web.curation.model.mapper.PostMapper;
import com.web.curation.model.service.PhotoService;
import com.web.curation.model.service.PostService;
import com.web.curation.model.service.UserService;
import com.web.curation.model.service.repository.UserRepository;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    PostService postService;

    @Autowired
    PhotoService photoService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostMapper postMapper;

    @Autowired
    CommentMapper commentMapper;

    @ApiOperation(value = "글 작성", notes = "새 게시글 작성, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping()
    public ApiUtils.ApiResult<?> writePost(@ApiParam(value = "게시글 정보", required = true) @RequestBody PostDto postDto) throws IOException {
        Post post = postService.writePost(postDto);

        if(post == null) {
            photoService.removePhotoById(postDto.getPhotoId());
            return ApiUtils.error("공연이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        return ApiUtils.success(postMapper.toDto(post));
    }

//    @ApiOperation(value = "작성자로 글 검색", notes = "게시글 목록 조회, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
//    @GetMapping(params = "userEmail")
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "userEmail", example = "t@t.t"),
//            @ApiImplicitParam(name = "pageSize", value = "5", example = "5")
//    })
//    public ApiUtils.ApiResult<?> getPostsByUser(@ApiParam(value = "회원 email", required = true) @RequestParam() String userEmail,
//                                                @ApiParam(value = "가져올 페이지 정보", required = true) Pageable pageable) {
//        if(userEmail.equals("")) {
//            return ApiUtils.error("검색어를 입력해주세요", HttpStatus.BAD_REQUEST);
//        }
//
//        List<Post> posts = postService.searchByUser(userEmail, pageable);
//
//        if(posts == null) {
//            return ApiUtils.error("검색결과가 없습니다.", HttpStatus.NO_CONTENT);
//        }
//
//        return ApiUtils.success(posts.stream().map(p -> postMapper.toDto(p)).collect(Collectors.toList()));
//    }
//
//    @ApiOperation(value = "내용으로 글 검색", notes = "게시글 목록 조회, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
//    @GetMapping(params = "word")
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "word", example = "세종문화회관"),
//            @ApiImplicitParam(name = "pageSize", value = "5", example = "5")
//    })
//    public ApiUtils.ApiResult<?> getPostsByContent(@ApiParam(value = "글 내용에서 찾을 검색어", required = true) @RequestParam() String word,
//                                                   @ApiParam(value = "가져올 페이지 정보", required = true) Pageable pageable) {
//        if(word.equals("")) {
//            return ApiUtils.error("검색어를 입력해주세요", HttpStatus.BAD_REQUEST);
//        }
//
//        List<Post> posts = postService.searchByContentContaining(word, pageable);
//
//        if(posts == null) {
//            return ApiUtils.error("검색결과가 없습니다.", HttpStatus.NO_CONTENT);
//        }
//
//        return ApiUtils.success(posts.stream().map(p -> postMapper.toDto(p)).collect(Collectors.toList()));
//    }

    @ApiOperation(value = "닉네임 or 내용으로 글 검색, 둘 다 없으면 모든 글", notes = "게시글 목록 조회, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @GetMapping()
    public ApiUtils.ApiResult<?> getPostsByContentAndUserNickname(@ApiParam(value = "글 내용에서 찾을 검색어") @RequestParam(required = false) String word,
                                                      @ApiParam(value = "회원 nickName") @RequestParam(required = false) String nickName,
                                                      @ApiParam(value = "가져올 페이지 정보", required = false) Pageable pageable) {
        List<Post> posts = new ArrayList<>();
        if(word == null && nickName == null) {
            posts = postService.listPost(pageable);
        } else if(word != null && word.equals("") == false) {
            posts = postService.searchByContentContaining(word, pageable);
        } else if(nickName != null && nickName.equals("") == false) {
            User user = userRepository.findByNickname(nickName);
            if(user != null) {
                posts = postService.searchByUser(user.getEmail(), pageable);
            }
        }

        return ApiUtils.success(posts);
    }

    @ApiOperation(value = "글 조회", notes = "게시글 조회, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @GetMapping("{postId}")
    public ApiUtils.ApiResult<?> getPost(@ApiParam(value = "게시글 ID", required = true) @PathVariable String postId) {
        PostDto postDto = postService.getPost(postId);

        if(postDto == null) {
            return ApiUtils.error("게시글을 찾을 수 없습니다.", HttpStatus.NO_CONTENT);
        }

        return ApiUtils.success(postDto);
    }

    @ApiOperation(value = "글수정", notes = "기존 게시글 수정, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PutMapping("/{postId}")
    public ApiUtils.ApiResult<?> updatePost(@ApiParam(value="게시글 ID") @PathVariable String postId,
                                            @ApiParam(value = "게시글 정보", required = true) @RequestBody PostDto postDto) {
        Post post = postService.updatePost(postId, postDto);
        if(post == null) {
            return ApiUtils.error("행사나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success(postMapper.toDto(post));
    }

    @ApiOperation(value = "글삭제", notes = "게시글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}")
    public ApiUtils.ApiResult<?> deletePost(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId) {
        if(postService.deletePost(postId) == false) {
            return ApiUtils.error("게시글을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }


    @ApiOperation(value = "댓글 작성", notes = "새 댓글 작성, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("/{postId}")
    public ApiUtils.ApiResult<?> writeComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                              @RequestBody @ApiParam(value = "댓글 정보", required = true) CommentDto commentDto) {
        Comment comment = postService.writeComment(postId, commentDto);
        if(comment == null) {
            return ApiUtils.error("게시글이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success(commentMapper.toDto(comment));
    }

    @ApiOperation(value = "댓글 수정", notes = "기존 댓글 수정, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PutMapping("/{postId}/{commentId}")
    public ApiUtils.ApiResult<?> updateComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                               @PathVariable("commentId") @ApiParam(value = "댓글 ID", required = true) String commentId,
                                               @RequestBody @ApiParam(value = "댓글 정보", required = true) CommentDto commentDto) {
        Comment comment = postService.updateComment(postId, commentId, commentDto);
        if(comment == null) {
            return ApiUtils.error("게시글이나 댓글을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success(commentMapper.toDto(comment));
    }

    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("/{postId}/{commentId}")
    public ApiUtils.ApiResult<?> deleteComment(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
                                               @PathVariable("commentId") @ApiParam(value = "댓글 ID", required = true) String commentId) {
        if(postService.deleteComment(postId, commentId) == false) {
            return ApiUtils.error("게시글이나 코멘트를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        return ApiUtils.success("success");
    }

//    @ApiOperation(value = "좋아요 버튼 클릭", notes = "좋아요 on/off, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
//    @PostMapping("/{postId}/like")
//    public ApiUtils.ApiResult<?> toggleLike(@PathVariable("postId") @ApiParam(value = "게시글 ID", required = true) String postId,
//                                            @RequestParam("userId") @ApiParam(value = "유저 ID", required = true) String userId) {
//        if(postService.toggleLike(postId, userId) == false) {
//            return ApiUtils.error("게시글이나 사용자를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
//        }
//        return ApiUtils.success("success");
//    }
}
