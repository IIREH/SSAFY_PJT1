package com.web.curation.model.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "alarm")
@Getter
@ToString
@Builder
public class Alarm {
    @Id
    private String id;
    @DBRef
    private User receivedUser;
    private String sendType;
    private String sendId;

    @Indexed(expireAfterSeconds =60*60*24*30)
    private LocalDate expireAt;


}
