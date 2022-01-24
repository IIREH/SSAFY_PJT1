package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "Post")
@Getter
@ToString
public class Post {
    private ObjectId id;
    private String contest_id;
    private LocalDateTime writeDate;
    private String content;
    private List<ObjectId> likeByList;
    private List<String> hashTag;
    private List<ObjectId> commentId;

    @Builder
    public Post(ObjectId id, String contest_id, LocalDateTime writeDate, String content, List<ObjectId> likeByList, List<String> hashTag, List<ObjectId> commentId) {
        this.id = id;
        this.contest_id = contest_id;
        this.writeDate = writeDate;
        this.content = content;
        this.likeByList = likeByList;
        this.hashTag = hashTag;
        this.commentId = commentId;
    }
}
