package com.web.curation.model.dto;

import com.web.curation.model.entity.Comment;
import com.web.curation.model.service.UserServiceImpl;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

@Builder
@Getter
@ToString
@ApiModel(value = "댓글 등록", description = "등록될 댓글의 상세 정보")
public class CommentDto {
    @ApiModelProperty(value = "댓글의 PK", hidden = true)
    private String id;
    @ApiModelProperty(value = "작성자의 email")
    private String userEmail;
    @ApiModelProperty(value = "댓글 작성일", hidden = true)
    private Date writeDate;
    @ApiModelProperty(value = "댓글 내용")
    private String content;
}
