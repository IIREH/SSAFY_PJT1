package com.web.curation.model.dto;

import com.web.curation.model.entity.Comment;
import com.web.curation.model.service.UserServiceImpl;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

@Builder
@Getter
@ToString
public class CommentDto {
    private String id;
    private String userEmail;
    private Date writeDate;
    private String content;
}
