package com.web.curation.model.entity;

import lombok.Builder;
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
    private List<String>followee;
    private String role;

    @Builder
    public User(ObjectId id, String email, String name, String nickname, String pwd, List<String> follower, List<String> followee,String role) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.pwd = pwd;
        this.follower = follower;
        this.followee = followee;
        this.role=role;
    }
}
