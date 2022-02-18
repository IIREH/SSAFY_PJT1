package com.web.curation.api;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.Post;
import com.web.curation.model.service.ContestService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@Slf4j
@Api("공연 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/contest")
public class ContestController {
    @Autowired
    ContestService contestService;

//    @ApiOperation(value = "공연 이름으로 검색", notes = "검색어를 포함하는 이름을 가진 공연 목록, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
//    @GetMapping(value = "", params = "contestName")
//    public ApiUtils.ApiResult<?> findContestsByNameContaining(@RequestParam @ApiParam(value = "공연 이름", required = true) String contestName,
//                                                              @ApiParam(value = "가져올 페이지 정보", required = true) Pageable pageable) {
//        List<Contest> contests = contestService.getContestsByNameContaining(contestName, pageable);
//
//        return ApiUtils.success(contests);
//    }
//
//    @ApiOperation(value = "공연 ID로 검색", notes = "해당 ID에 해당하는 공연, 결과 메시지 반환", response = Contest.class)
//    @GetMapping(value = "/{}", params = "contestId")
//    public ApiUtils.ApiResult<?> findContestsById(@RequestParam @ApiParam(value = "공연 ID", required = true) String contestId) {
//        Contest contest = contestService.getContestById(contestId);
//
//        return ApiUtils.success(contest);
//    }

//    @ApiOperation(value = "최신 공연 목록", notes = "공연 목록 조회, 결과 메시지 반환", response = Contest.class)
//    @GetMapping(value = "/3")
//    public ApiUtils.ApiResult<?> findContests(@ApiParam(value = "가져올 페이지 정보", required = true) Pageable pageable) {
//        List<Contest> posts = contestService.getRecentContests(pageable).getContent();
//
//        return ApiUtils.success(posts);
//    }

    @ApiOperation(value = "공연 이름 or 공연ID로 목록 조회, 둘 다 없으면 최신 공연", notes = "파라미터에 따른 공연 목록 조회(공연ID에 해당하는 공연, 단어에 해당 단어가 이름에 포함된 공연, 아무것도 없으면 최신 공연), 결과 메시지 반환", response = Contest.class)
    @GetMapping()
    public ApiUtils.ApiResult<?> findContestsByName(@RequestParam(value = "name", required = false) @ApiParam(value = "공연 이름") String name,
                                              @RequestParam(value = "id", required = false) @ApiParam(value = "공연 ID") String id,
                                              @ApiParam(value = "가져올 페이지 정보") Pageable pageable) {
        List<Contest> Contests = new ArrayList<>();
        if(name == null && id == null) {
            Contests = contestService.getContests(pageable).getContent();
        } else if(name != null && name.equals("") == false) {
            Contests = contestService.getContestsByNameContaining(name, pageable);
        } else if(id != null && id.equals("") == false) {
            Contests.add(contestService.getContestById(id));
        }

        return ApiUtils.success(Contests);
    }

//    @ApiOperation(value = "공연 목록 조회", notes = "파라미터에 따른 공연 목록 조회(공연ID에 해당하는 공연, 단어에 해당 단어가 이름에 포함된 공연, 아무것도 없으면 최신 공연), 결과 메시지 반환", response = Contest.class)
//    @GetMapping(params = {"id"})
//    public ApiUtils.ApiResult<?> findContestsById(@RequestParam(value = "name") @ApiParam(value = "공연 이름") String name,
//                                              @RequestParam(value = "id") @ApiParam(value = "공연 ID") String id,
//                                              @ApiParam(value = "가져올 페이지 정보") Pageable pageable) {
//        List<Contest> posts = new ArrayList<>();
//        if(name == null && id == null) {
//            posts = contestService.getRecentContests(pageable).getContent();
//        } else if(name != null && name.equals("")) {
//            posts = contestService.getContestsByNameContaining(name, pageable);
//        } else if(id != null && id.equals("")) {
//            posts.add(contestService.getContestById(id));
//        }
//
//        return ApiUtils.success(posts);
//    }
}
