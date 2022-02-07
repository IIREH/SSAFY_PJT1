package com.web.curation.model.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.util.Assert;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Getter
@ToString
//TODO Validation 체크
public class UserDto {
    @NotEmpty(message = "id를 채워주세요.")
    @Email(message = "이메일 양식에 맞지않습니다.")
    private String id;

    @NotEmpty(message = "pw를 채워주세요.")
    @Size(min=6,max=20,message = "비밀번호를 6자리 이상 20자리 이하로 해주세요.")
    private String pwd;

    @Size(min = 3,max = 20,message = "닉네임은 3자리 이상 20자리 이하로 해주세요.")
    private String nickName;
    private StringBuilder jwt;

    @Builder(builderMethodName = "login" )
    public UserDto(String id, String pwd) {
        this.id = id;
        this.pwd = pwd;
    }

    @Builder(builderMethodName = "register")
    public UserDto(String id, String pwd, String nickName) {
        this.id = id;
        this.pwd = pwd;
        this.nickName = nickName;
    }

    @Builder(builderMethodName = "update")
    public UserDto( String pwd, String nickName,StringBuilder jwt) {
        this.pwd = pwd;
        this.nickName = nickName;
        this.jwt=jwt;
    }
    public String getJwt(){
        return jwt==null?null:jwt.toString();
    }

}
