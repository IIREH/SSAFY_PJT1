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

@Document(collection = "post")
@Getter
@Setter
@Builder
@ToString
public class Post {
    @Id
    private String id;
    @DBRef
    private Contest contest;
    @DBRef
    private User user;
    @CreatedDate
    private Date writeDate;
    private String content;
    @DBRef
    private Photo photo;
    @DBRef
    private List<User> likedByList;
    @DBRef
    private List<HashTag> hashTags;
    @DBRef
    private List<Comment> comments;
}
