package com.web.curation.jwt;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.sql.Date;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

@Slf4j
@Component
public class TokenProvider implements InitializingBean {
    private static final String AUTHORITIES_KEY = "auth";

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.token-validity-in-seconds}")
    private long tokenValidityInMilliseconds;

    private Key key;


    @Override
    public void afterPropertiesSet() throws Exception {
        byte[] keyBytes = DatatypeConverter.parseBase64Binary(secret);
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS512;
        this.key= new SecretKeySpec(keyBytes,signatureAlgorithm.getJcaName());
    }
    public String createToken(Authentication authentication){
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime validity= now.plus(this.tokenValidityInMilliseconds*1000, ChronoUnit.MILLIS);
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY,authorities)
                .signWith(SignatureAlgorithm.HS512,key)
                .setExpiration(Date.from(validity.atZone(ZoneId.systemDefault()).toInstant()))
                .compact();
    }
    public Authentication getAuthentication(String token){
        Claims claims = Jwts
                .parser()
                .setSigningKey(key)
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends  GrantedAuthority> authorities = Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        User principal = new User(claims.getSubject(),"",authorities);
        return new UsernamePasswordAuthenticationToken(principal,token,authorities);
    }
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            return true;
        }catch (ExpiredJwtException e){
            log.info("만료된 JWT 토큰입니다");
        }catch (UnsupportedJwtException e){
            log.info("지원되지 않는 토큰입니다");
        }catch (MalformedJwtException e){
            log.info("잘못된 JWT 서명입니다.");
        }catch (IllegalArgumentException e){
            log.info("JWT 토큰이 잘못 되어 있습니다");
        }
        return false;
    }
}
