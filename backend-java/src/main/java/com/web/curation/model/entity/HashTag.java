package com.web.curation.model.entity;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "hashtag")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HashTag {
    @Id
    private String hashTag;
}
