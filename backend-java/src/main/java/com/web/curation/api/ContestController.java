package com.web.curation.api;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.Post;
import com.web.curation.model.service.ContestService;
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
@Api("공연 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/contest")
public class ContestController {
    @Autowired
    ContestService contestService;

    @ApiOperation(value = "공연 검색", notes = "검색어를 포함하는 이름을 가진 공연 목록, 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @GetMapping("/{contestName}")
    public ApiUtils.ApiResult<?> listContest(@PathVariable @ApiParam(value = "공연 이름", required = true) String contestName) {
        List<Contest> contests = contestService.getContestsByName(contestName);

        if(contests == null) {
            return ApiUtils.error("공연을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        return ApiUtils.success(contests);
    }
}
