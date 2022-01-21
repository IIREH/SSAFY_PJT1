package com.web.curation.jwt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends GenericFilterBean {
    public static final String AUTHORIZATION_HEADER= "Authorization";
    private final TokenProvider tokenProvider;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest =(HttpServletRequest) servletRequest;
        String jwt =resolveToken(httpServletRequest);
        String requestURI = httpServletRequest.getRequestURI();

        if(StringUtils.hasText(jwt)&&tokenProvider.validateToken(jwt)){
            Authentication authentication =tokenProvider.getAuthentication(jwt);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            log.debug("Security Context:'{}' 인증정보가 저장햇습니다",authentication.getName(),requestURI);
        }else
            log.debug("유효한 JWT 토큰이 없습니다,uri:'{}'",requestURI);

        filterChain.doFilter(servletRequest,servletResponse);
    }

    private String resolveToken(HttpServletRequest request){
        return Optional.ofNullable(request.getHeader(AUTHORIZATION_HEADER))
                .map(x->x.substring(7))
                .orElseGet(String::new);
    }
}
