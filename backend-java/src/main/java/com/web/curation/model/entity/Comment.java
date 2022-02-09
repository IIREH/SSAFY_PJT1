package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Document(collection = "comment")
@Getter
@Setter
@Builder
@ToString
public class Comment {
    @Id
    private String id;
    @DBRef
    private User user;
    @CreatedDate
    private Date writeDate;
    @LastModifiedDate
    private Date modifyDate;
    private String content;
}
