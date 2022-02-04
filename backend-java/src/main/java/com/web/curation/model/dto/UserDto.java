package com.web.curation.model.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.bson.types.ObjectId;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@ToString

public class UserDto {
    @NotEmpty(message = "id를 채워주세요.")
    @Size(min=3,message = "이메일을 넣어주세요.")
    private String id;
    @NotEmpty(message = "pw를 채워주세요.")
    @Size(min=6,max=20,message = "비밀번호를 6자리 이상 20자리 이하로 해주세요.")
    private String pwd;
    @Builder.Default
    @Size(min = 3,max = 20,message = "닉네임은 3자리 이상 20자리 이하로 해주세요.")
    private String nickName="ooo";
    private String jwt;

    @Builder

    public UserDto(String id, String pwd, String nickName, String jwt) {
        this.id = id;
        this.pwd = pwd;
        this.nickName = nickName;
        this.jwt = jwt;
    }
}
