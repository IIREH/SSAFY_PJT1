package com.web.curation.batch.reader;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.web.curation.batch.ContestDto;
import com.web.curation.model.service.repository.ContestRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.NonTransientResourceException;
import org.springframework.batch.item.ParseException;
import org.springframework.batch.item.UnexpectedInputException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@StepScope
@RequiredArgsConstructor
public class ContestReader implements ItemReader<List<ContestDto>> {
    private final RestTemplate restTemplate;
    private final ContestRepository contestRepository;
    @Value("${api.contest.servicekey}")
    private String serviceKey;
    @Value("${api.contest.url}")
    private String url;
    @Value("#{jobParameters[rows]}")
    private String rows;

    @Value("#{jobParameters[smonth]}")
    private String sMonth;

    @Value("#{jobParameters[emonth]}")
    private String eMonth;



    @Override
    public List<ContestDto> read() throws Exception, UnexpectedInputException, ParseException, NonTransientResourceException {
        log.debug("Reading the info of next Contest info");
//        return fetchContestFromAPI(sMonth,eMonth);
        return fetchContestFromAPI(sMonth,eMonth);

    }

    private List<ContestDto> fetchContestFromAPI(String sMonth,String eMonth) {
        List<ContestDto> list = new ArrayList<>();
        try{
         URI uri= new URI(url+"?service="+serviceKey
                 +"&cpage=1&rows="+rows
                 +"&stdate=" +sMonth+"&eddate="+eMonth);
         log.debug("============");
         log.debug("공연 API URL:{}",uri.toString());
         log.debug("============");

            ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
//            log.debug("response:{}",response);
            ObjectMapper mapper = new XmlMapper();
            List<ContestDto> originals = mapper.readValue(response.getBody(),List.class);
//            log.info("response originals:{}",originals);
            list=mapper.convertValue(originals, new TypeReference<List<ContestDto>>() {});
//            log.info("response list:{}",list);


        }catch (Exception e){
            log.error("{}",e.toString());

            log.error("데이터 없음.");
        }
        return list;
    }
}
