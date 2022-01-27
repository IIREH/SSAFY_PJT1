package com.web.curation.batch;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class ContestDto implements Serializable {
    private String mt20id;
    private String prfnm;
    private String prfpdfrom;
    private String prfpdto;
    private String fcltynm;
    private String poster;
    private String genrenm;
    private String prfstate;
    private String openrun;
}
