package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "user")
@Getter
@ToString
@Builder

public class User {
    private ObjectId id;
    private String email;
    private String nickname;
    private String pwd;
    private List<String> follower;
    private List<String>following;
    private List<String> likePost;

    private String role;


}
