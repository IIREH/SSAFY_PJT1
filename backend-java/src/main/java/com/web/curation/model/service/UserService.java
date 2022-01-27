package com.web.curation.model.service;

import com.web.curation.model.dto.CommentDto;
import com.web.curation.model.dto.PostDto;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.entity.Comment;
import com.web.curation.model.entity.Contest;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.UserEntity;
import com.web.curation.model.service.repository.CommentRepository;
import com.web.curation.model.service.repository.ContestRepository;
import com.web.curation.model.service.repository.PostRepository;
import com.web.curation.model.service.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class UserService {
    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ContestRepository contestRepository;

    @Autowired
    UserRepository userRepository;

    public UserEntity registerUser(UserDto userDto) {
        UserEntity userEntity = UserEntity.builder()
                .email(userDto.getEmail())
                .name(userDto.getName())
                .nickname(userDto.getNickName())
                .pw(userDto.getPw())
                .build();

        return userRepository.save(userEntity);
    }

    public boolean unregisterUser(ObjectId objectId) {
        if(userRepository.findById(objectId).isPresent() == false) {
            return false;
        }

        userRepository.deleteById(objectId);
        return true;
    }

//    public UserEntity updateUser(UserDto userDto) {
//        TODO:id를 String에서 ObjectId로 수정 가능하면 userId를 findById로 찾고 안된다면 다른 방법 찾기
//        userRepository.deleteById(objectId);
//        return true;
//    }
}
