package com.web.curation.model.entity;

import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "user")
@Getter
@ToString
public class Contest {
    private String id;
    private String name;
    private String startDate;
    private String endDate;
    private String location;
    private List<String> cast;
    private String story;
}
