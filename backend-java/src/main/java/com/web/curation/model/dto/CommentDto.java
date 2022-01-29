package com.web.curation.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;

@Builder
@Getter
@ToString
public class CommentDto {
    private ObjectId id;
    private ObjectId userId;
    private String content;
}
