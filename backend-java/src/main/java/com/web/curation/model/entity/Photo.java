package com.web.curation.model.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "photo")
@Getter
@Setter
@Builder
@ToString
public class Photo {
    @Id
    private String id;
    private Binary image;
}
