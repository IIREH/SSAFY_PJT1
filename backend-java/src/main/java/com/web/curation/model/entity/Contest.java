package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "contest")
@Getter
@ToString
public class Contest {
    private String id;
    private String name;
    private String startDate;
    private String endDate;
    private String location;
    private String poster;
    private String genre;
    @Builder
    public Contest(String id, String name, String startDate, String endDate, String location, String poster, String genre) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.poster = poster;
        this.genre = genre;
    }
}
