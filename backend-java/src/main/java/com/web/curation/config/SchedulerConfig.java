package com.web.curation.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@Component
@RequiredArgsConstructor
public class SchedulerConfig {
    private final JobLauncher jobLauncher;
    private final Job job;

    //TODO 원하는 시간대로 전자는 서비스시 쓸 것 매달 20일 04시 후자는 10초마다 배치를 하게 만듬.

   @Scheduled(cron="0 0 4 20 * ?")
   //@Scheduled(cron="0/59 * * * *  ?")
    public void batchContestList() throws JobInstanceAlreadyCompleteException, JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {
        log.info("Run Scheduler");
        LocalDate sdate = LocalDate.now();
        sdate=sdate.minusDays(19);
        LocalDate edate = sdate.plusMonths(2);
        DateTimeFormatter ymdPattern= DateTimeFormatter.ofPattern("yyyyMMdd");
        String smonth = sdate.format(ymdPattern);
        String emonth = edate.format(ymdPattern);
        log.info("조회 날짜: smonth:{}, emonth:{}",smonth,emonth);
        String rows = "2000000";

        jobLauncher.run(job,
                new JobParametersBuilder()
                .addString("JobID",String.valueOf(System.currentTimeMillis()))
                        .addString("smonth",smonth)
                        .addString("emonth",emonth)
                        .addString("rows",rows)
                        .toJobParameters());
        log.info("Complete Scheduler");

    }

}
