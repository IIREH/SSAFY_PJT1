package com.web.curation.batch.processor;

import com.web.curation.batch.ContestDto;
import com.web.curation.model.entity.Contest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;

import java.util.List;
import java.util.stream.Collectors;

@StepScope
@Slf4j
public class ContestProcessor implements ItemProcessor<List<ContestDto>, List<Contest>> {

    @Override
    public List<Contest> process(List<ContestDto> contestDtos) throws Exception {
        List<Contest> list = contestDtos.stream()
                .map(x->Contest.builder()
                        .id(x.getMt20id())
                        .name(x.getPrfnm())
                        .startDate(x.getPrfpdfrom())
                        .endDate(x.getPrfpdto())
                        .location(x.getFcltynm())
                        .poster(x.getPoster())
                        .genre(x.getGenrenm())
                        .build())
                .collect(Collectors.toList());

        return list;
    }
}
