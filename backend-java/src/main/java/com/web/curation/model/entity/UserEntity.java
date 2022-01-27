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
public class UserEntity {
    @Id
    private ObjectId id;
    private String email;
    private String name;
    private String nickname;
    private String pw;
    @DBRef
    private List<UserEntity> followers;
}
