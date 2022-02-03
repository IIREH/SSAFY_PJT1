package com.web.curation.model.service;

import com.web.curation.model.dto.UserDto;

public interface UserService  {
    void register(UserDto userDto);
    void update(String jwt,UserDto userDto);
    void delete(String jwt);

}
