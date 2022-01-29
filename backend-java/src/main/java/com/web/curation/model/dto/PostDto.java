package com.web.curation.model.dto;


import com.web.curation.model.entity.*;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;

import java.util.List;

@Builder
@Getter
@ToString
public class PostDto {
    private ObjectId id;
    private String contestId;
    private ObjectId userId;
    private String content;
    private List<ObjectId> likedByList;
    private List<HashTag> hashTags;
    private List<ObjectId> comments;
}
