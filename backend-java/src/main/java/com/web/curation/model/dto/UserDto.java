package com.web.curation.model.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Getter
@ToString
@Slf4j
public class UserDto {
    private String id;
    private String pwd;
    private String nickName;
    private StringBuilder jwt;

    @Builder(builderMethodName = "login" )
    public UserDto(String id, String pwd) {
        this.id = id;
        this.pwd = pwd;
        validationId();
        validationPwd();
    }

    @Builder(builderMethodName = "register")
    public UserDto(String id, String pwd, String nickName) {
        this.id = id;
        this.pwd = pwd;
        this.nickName = nickName;
        validationId();
        validationPwd();
        validationNickName();
    }

    @Builder(builderMethodName = "update")
    public UserDto( String pwd, String nickName,StringBuilder jwt) {
        this.pwd = pwd;
        this.nickName = nickName;
        this.jwt=jwt;
        validationPwd();
        validationNickName();

    }
    public String getJwt(){
        return jwt==null?null:jwt.toString();
    }

    private void validationId(){
        log.info("validationId:{}",id);
        String msg= "아이디는 이메일로 해주세요.";
        checkArgument(id.isEmpty(),msg);
        Pattern emailPattern = Pattern.compile("[a-zA-Z0-9[!#$%&'()*+,/\\-_\\.\"]]+@[a-zA-Z0-9[!#$%&'()*+,/\\-_\"]]+\\.[a-zA-Z0-9[!#$%&'()*+,/\\-_\"\\.]]+");
        Matcher m = emailPattern.matcher(id);
        checkArgument(!m.matches(),msg);
    }
    private void validationPwd(){
        log.info("validationPwd:{}",pwd);

        String msg= "비밀번호를 6자리 이상 20자리 이하로 해주세요.";
        checkArgument(pwd.isEmpty(),msg);
        checkArgument(6>pwd.length()||pwd.length()>20,msg);

    }
    private void validationNickName(){
        log.info("validationNickName:{}",nickName);

        String msg="닉네임를 3자리 이상 20자리 이하로 해주세요.";
        checkArgument(nickName.isEmpty(),msg);
        checkArgument(3>nickName.length()||nickName.length()>20,msg);
    }
    private void checkArgument(boolean exp, String msg){
        if(exp)
            throw new IllegalArgumentException(msg);
    }
}
