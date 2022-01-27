package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "contests")
@Getter
@Builder
@ToString
public class Contest {
    @Id
    private String id;
    private String name;
    private String startDate;
    private String endDate;
    private String location;
    private List<String> cast;
    private String story;
}
