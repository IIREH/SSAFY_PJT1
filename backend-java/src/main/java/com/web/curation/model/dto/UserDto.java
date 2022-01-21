package com.web.curation.model.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Builder
@Getter
@ToString
//TODO Validation 체크
public class UserDto {
//    @NotEmpty(message = "id를 채워주세요.")
//   @Size(min=3,max=50,message = "아이디를 3자 이상 50자 이하로 해주세요.")
    private String id;
//    @NotEmpty(message = "pw를 채워주세요.")
//    @Size(min=6,message = "비밀번호를 6자리 이상 해주세요.")
    private String pw;
}
