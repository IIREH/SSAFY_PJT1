package com.web.curation.model.dto;


import com.web.curation.model.entity.*;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "게시글", description = "게시글의 상세 정보")
public class PostDto {
    @ApiModelProperty(value = "게시글의 primary key")
    private String id;
    @ApiModelProperty(value = "게시글에 연관된 공연")
    private String contestId;
    @ApiModelProperty(value = "작성자의 id")
    private String userId;
    @ApiModelProperty(value = "글 내용")
    private String content;
    @ApiModelProperty(value = "첨부된 사진")
    private String photoId;
    @ApiModelProperty(value = "좋아요를 누른 유저들")
    private List<String> likedByList;
    @ApiModelProperty(value = "해시태그들")
    private List<String> hashTags;
    @ApiModelProperty(value = "댓글들")
    private List<String> comments;
}
