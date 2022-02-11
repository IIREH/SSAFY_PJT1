package com.web.curation.model.dto;


import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.HashTag;
import com.web.curation.model.entity.Post;
import com.web.curation.model.service.CommentService;
import com.web.curation.model.service.ContestService;
import com.web.curation.model.service.PhotoService;
import com.web.curation.model.service.UserServiceImpl;
import com.web.curation.model.service.repository.UserRepository;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import java.util.stream.Collectors;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "게시글 등록", description = "등록될 게시글의 상세 정보")
public class PostDto {
    @ApiModelProperty(value = "게시글의 PK")
    private String id;
    @ApiModelProperty(value = "게시글에 연관된 공연 ID")
    private String contestId;
    @ApiModelProperty(value = "작성자의 email")
    private String userEmail;
    @ApiModelProperty(value = "글 내용")
    private String content;
    @ApiModelProperty(value = "첨부된 사진 ID")
    private String photoId;
    @ApiModelProperty(value = "해시태그들")
    private List<String> hashTags;
    @ApiModelProperty(value = "댓글들 ID")
    private List<String> commentIds;
    @ApiModelProperty(value = "좋아요를 누른 유저들 email")
    private List<String> likedByList;
    @ApiModelProperty(value = "작성일")
    private Date writeDate;
}
