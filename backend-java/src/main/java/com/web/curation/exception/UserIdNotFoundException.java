package com.web.curation.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserIdNotFoundException extends RuntimeException {
    public UserIdNotFoundException() {
        super("아이디가 없습니다.");
    }

    public UserIdNotFoundException(String msg) {
        super(msg);
    }

    public UserIdNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
