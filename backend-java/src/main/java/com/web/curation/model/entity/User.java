package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
@Getter
@Builder
@ToString
public class User {
    private ObjectId id;
    private String email;
    private String name;
    private String nickname;
    private String pwd;
    private List<String> follower;
    private List<String> followee;
    @Builder

    public User(ObjectId id, String email, String name, String nickname, String pwd, List<String> follower, List<String> followee) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.pwd = pwd;
        this.follower = follower;
        this.followee = followee;
    }

    public boolean equals(Object o) {
        if(o instanceof User) {
            User user = (User) o;
            if(user.getId().equals(this.getId())) {
                return true;
            }
        }

        return false;
    }
}
