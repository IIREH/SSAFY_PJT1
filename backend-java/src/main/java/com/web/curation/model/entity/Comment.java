package com.web.curation.model.entity;

import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "user")
@Getter
@ToString
public class Comment {
    private ObjectId id;
    private String comment;
    private String email;
}
