package com.web.curation.model.service;

import com.web.curation.model.dto.UserDto;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.CommentRepository;
import com.web.curation.model.service.repository.ContestRepository;
import com.web.curation.model.service.repository.PostRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ContestService {
    @Autowired
    ContestRepository contestRepository;

    public List<Contest> getContestsByName(String contestName) {
        Optional<List<Contest>> contestOrNull = contestRepository.findAllByNameContaining(contestName);

        if(contestOrNull.isPresent() == false) {
            return null;
        }
        return contestOrNull.get();
    }
}
