package com.web.curation.batch.writer;

import com.web.curation.model.entity.Contest;
import com.web.curation.model.service.repository.ContestRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemWriter;

import java.util.List;

@StepScope
@Slf4j
@RequiredArgsConstructor
public class ContestWriter implements ItemWriter<List<Contest>> {
    private final ContestRepository contestRepository;
    @Override
    public void write(List<? extends List<Contest>> list) throws Exception {
        for (List<Contest> contestList:list) {
            contestRepository.saveAll(contestList);
            log.info("batch writer list:{},size:{}",contestList,contestList.size());
        }
    }
}
