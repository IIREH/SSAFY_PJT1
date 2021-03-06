package com.web.curation.model.service;

import com.web.curation.model.dto.UserDto;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.util.List;

public interface UserService {
    void register(UserDto userDto);
    void update(UserDto userDto);
    void delete(String jwt);
    String getNickName(String nickName);
    List<String> searchNickName(String nickName);
}

