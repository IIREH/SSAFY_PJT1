package com.web.curation.api;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.entity.Photo;
import com.web.curation.model.service.PhotoService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@Slf4j
@Api("게시글 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/photo")
public class PhotoController {
    @Autowired
    PhotoService photoService;

    @PostMapping()
    public ApiUtils.ApiResult<?> uploadPhoto(@RequestParam("image") MultipartFile image) throws IOException {
        Photo photo = photoService.addPhoto(image);
        if(photo == null) {
            return ApiUtils.error("사진을 저장하는데 문제가 발생했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return ApiUtils.success(photo.getId());
    }

    @GetMapping("/{photoId}")
    public ApiUtils.ApiResult<?> downloadPhoto(@PathVariable("photoId") @ApiParam(value = "사진 ID", required = true) String photoId) throws IOException {
        Photo photo = photoService.getPhoto(photoId);
        if(photo == null) {
            return ApiUtils.error("사진을 찾는데 문제가 발생했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return ApiUtils.success(Base64.getEncoder().encodeToString(photo.getImage().getData()));
    }
}
