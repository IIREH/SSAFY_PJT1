package com.web.curation.model.entity;

import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "user")
@Getter
@ToString
public class User {
    private ObjectId id;
    private String email;
    private String name;
    private String nickname;
    private String pwd;
    private List<String> follower;
}
