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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ContestService {
    @Autowired
    ContestRepository contestRepository;

    public List<Contest> getContestsByNameContaining(String contestName, Pageable pageable) {
        return contestRepository.findAllByNameContaining(contestName, pageable).orElse(new ArrayList<>());
    }

    public Contest getContestById(String contestId) {
        return contestRepository.findById(contestId).orElse(null);
    }

    public Page<Contest> getContests(Pageable pageable) {
        return contestRepository.findAll(pageable);
    }
}
