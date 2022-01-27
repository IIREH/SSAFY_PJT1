package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Document(collection = "comments")
@Getter
@Builder
@ToString
public class Comment {
    @Id
    private ObjectId id;
    @DBRef
    private UserEntity user;
    @CreatedDate
    private Date writeDate;
    private String content;
}
