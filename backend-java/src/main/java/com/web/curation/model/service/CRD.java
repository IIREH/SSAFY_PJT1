package com.web.curation.model.service;

import com.web.curation.model.entity.User;

import java.util.List;
import java.util.function.Function;

public interface CRD {
    boolean add(String jwt, String nickName,String errMsg);
    boolean remove(String jwt,String nickName,String errMsg);
    List getList(String nickName, Function<User,List<String>> mapper, String errMsg);

}
