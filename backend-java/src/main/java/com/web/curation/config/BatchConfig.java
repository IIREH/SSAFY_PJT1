package com.web.curation.config;


import com.web.curation.batch.ContestDto;
import com.web.curation.batch.processor.ContestProcessor;
import com.web.curation.batch.reader.ContestReader;
import com.web.curation.batch.writer.ContestWriter;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.service.repository.ContestRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class BatchConfig {
    public static int CHUCK_AND_PAGE_SIZE = 100;
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ContestRepository contestRepository;

    @Bean
    RestTemplate restTemplate(){
        return new RestTemplate();
    }
    @Bean
    public Job ContestJob(){
        return jobBuilderFactory.get("공연예술통합전산망 공연정보 수집")
                .start(contestStep())
                .next(contestDetailStep())
                .build();
    }

    @Bean
    public Step contestStep(){
        return stepBuilderFactory.get("공연 정보 수집 스텝")
                .<List<ContestDto>,List<Contest>>chunk(1)
                .reader(contestReader())
                .processor(contestProcessor())
                .writer(contestWriter())
                .build();
    }


    @Bean
    public Step contestDetailStep(){
        return stepBuilderFactory.get("공연 상세정보 수집 스텝")
                .<List<ContestDto>,List<Contest>>chunk(1)
                .reader(contestReader())
                .processor(contestProcessor())
                .writer(contestWriter())
                .build();
    }


    @Bean
    @StepScope
    public ItemReader<List<ContestDto>> contestReader(){
        return new ContestReader(restTemplate(),contestRepository);
    }
    @Bean
    @StepScope
    public ItemProcessor<List<ContestDto>,List<Contest>> contestProcessor() {
     return new ContestProcessor();
    }
    @Bean
    @StepScope
    public ItemWriter<List<Contest>> contestWriter(){
        return new ContestWriter(contestRepository);
    }


}
