package com.web.curation.model.service;

import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.UserRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface FollowService {
    List<String> addFollow(String jwt,String nickName);
    List<String> removeFollow(String jwt,String nickName);
    List<String> getFollow(String jwt, Function<User,List<String>>mapper,String errMsg);
}
