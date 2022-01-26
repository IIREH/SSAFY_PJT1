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
public class UserEntity {
    private ObjectId id;
    private String email;
    private String name;
    private String nickname;
    private String pwd;
    private List<String> follower;

    @Builder
    public UserEntity(ObjectId id, String email, String name, String nickname, String pwd, List<String> follower) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.pwd = pwd;
        this.follower = follower;
    }
}