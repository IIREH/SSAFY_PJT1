package com.web.curation.api;

import com.web.curation.exception.UnauthorizedException;
import com.web.curation.jwt.JwtFilter;
import com.web.curation.jwt.Token;
import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.service.UserService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@Slf4j
@Api("사용자 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final UserService userService;

    @PostMapping("/login")
    public ApiUtils.ApiResult<Token> login(@RequestParam(value = "id")  String id, @RequestParam(value = "pwd") String pwd) throws UnauthorizedException {
        log.info("login mapping");
        UserDto userDto = UserDto.login()
                .id(id)
                .pwd(pwd)

                .build();
        log.info("login info:'{}'",userDto);


        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDto.getId(),userDto.getPwd());
        Authentication authentication =authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt =tokenProvider.createToken(authentication);
        HttpHeaders httpHeaders =new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER,"Bearer "+jwt);
        log.info("jwt:{}",jwt);
        log.info("login success");

        return ApiUtils.success(new Token(jwt));
    }
    @ApiOperation(value = "회원가입", notes = "회원가입 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping()
    public ApiUtils.ApiResult<Boolean> register(@RequestParam(value = "id") String id,@RequestParam(value = "pwd") String pwd,@RequestParam(value = "nickName") String nickName){
        log.info("register connect");
        UserDto userDto = UserDto.register()
                .id(id)
                .pwd(pwd)
                .nickName(nickName)
                .build();
        userService.register(userDto);
        log.info("register success");
        return ApiUtils.success(Boolean.TRUE);
    }
    @ApiOperation(value = "회원변경", notes = "회원변경 논리값 반환", response = ApiUtils.ApiResult.class)
    @PutMapping()
    public ApiUtils.ApiResult<Boolean> update(@RequestParam(value = "jwt") String jwt,@RequestParam(value = "pwd") String pwd,@RequestParam(value = "nickName")String nickName){
        log.info("update connect");
        UserDto userDto = UserDto.update()
                .pwd(pwd)
                .nickName(nickName)
                .jwt(new StringBuilder(jwt))
                .build();
        userService.update(userDto);
        log.info("update success");

        return ApiUtils.success(Boolean.TRUE);

    }
    @ApiOperation(value = "회원탈퇴", notes = "회원탈퇴 논리값 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping()
    public ApiUtils.ApiResult<Boolean> delete(@RequestParam(value = "jwt") String jwt){
        log.info("delete connect");
        userService.delete(jwt);
        log.info("delete success");
        return ApiUtils.success(Boolean.TRUE);
    }
    @GetMapping("/nickName")
    public ApiUtils.ApiResult<String> getNickName(@RequestParam(value = "jwt") String jwt){
        log.info("nickName connect");
        String value=userService.getNickName(jwt);
        log.info("nickName success:{}",value);
        return ApiUtils.success(value);
    }

    @GetMapping("/nickNameSearch")
    public ApiUtils.ApiResult<List<String>> searchNickName(@RequestParam(value = "nickName") String nickName){
        log.info("nickName Search connect");
        List<String> value=userService.searchNickName(nickName);
        log.info("nickName success:{}",value);
        return ApiUtils.success(value);
    }

}
