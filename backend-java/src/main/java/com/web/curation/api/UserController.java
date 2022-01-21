package com.web.curation.api;

import com.web.curation.exception.UnauthorizedException;
import com.web.curation.jwt.JwtFilter;
import com.web.curation.jwt.Token;
import com.web.curation.jwt.TokenProvider;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.dto.UserDto;
import com.web.curation.utils.ApiUtils;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    //TODO 테스트 이후에  PostMapping으로.
    //TODO 이야기해보고 불편하면, ResponseEntity 로됨.
    @GetMapping("/login")
    public ApiUtils.ApiResult<Token> login(@RequestParam(value = "id") String id, @RequestParam(value = "pw") String pw) throws UnauthorizedException {
        log.info("login mapping");

        UserDto userDto = UserDto.builder()
                .id(id)
                .pw(pw)
                .build();
        log.info("login info:'{}'",userDto);

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDto.getId(),userDto.getPw());
        Authentication authentication =authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt =tokenProvider.createToken(authentication);
        log.info("jwt:{}",jwt);
        HttpHeaders httpHeaders =new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER,"Bearer "+jwt);
        return ApiUtils.success(new Token(jwt));
    }


}
