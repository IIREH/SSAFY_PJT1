package com.web.curation.api;

import com.web.curation.exception.UnauthorizedException;
import com.web.curation.jwt.JwtFilter;
import com.web.curation.jwt.Token;
import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.UserDto;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.UserService;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    UserService userService;

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    @GetMapping("/login")
    public ApiUtils.ApiResult<Token> login(@RequestParam(value = "id") String id, @RequestParam(value = "pwd") String pwd) throws UnauthorizedException {
        log.info("login mapping");

        UserDto userDto = UserDto.builder()
                .id(id)
                .pwd(pwd)
                .build();
        log.info("login info:'{}'",userDto);

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDto.getId(),userDto.getPwd());
        Authentication authentication =authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt =tokenProvider.createToken(authentication);
        log.info("jwt:{}",jwt);
        HttpHeaders httpHeaders =new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER,"Bearer "+jwt);
        return ApiUtils.success(new Token(jwt));
    }

    @ApiOperation(value = "회원가입", notes = "회원가입 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @PostMapping("register")
    public ApiUtils.ApiResult<?> register(@RequestBody @ApiParam(value = "회원 정보", required = true) UserDto userDto) {
        userService.registerUser(userDto);
        return ApiUtils.success("success");
    }
    
    @ApiOperation(value = "회원탈퇴", notes = "회원탈퇴 결과 메시지 반환", response = ApiUtils.ApiResult.class)
    @DeleteMapping("unregister/{userid}")
    public ApiUtils.ApiResult<?> unregister(@PathVariable("userid") @ApiParam(value = "회원 ID", required = true) ObjectId objectId) {
        userService.unregisterUser(objectId);
        return ApiUtils.success("success");
    }
}
