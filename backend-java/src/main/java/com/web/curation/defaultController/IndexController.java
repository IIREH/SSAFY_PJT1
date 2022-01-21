package com.web.curation.defaultController;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.entity.Post;
import com.web.curation.model.entity.User;
import com.web.curation.model.service.repository.PostRepository;
import com.web.curation.model.service.repository.UserRepository;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;


@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@Slf4j
public class IndexController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String index(){
        log.info("call index");

//        인덱스 페이지 새로고침하며 테스트
        ObjectId objectId = new ObjectId();
        Post post = Post.builder()
                .id(objectId)
                .contest_id("AA12")
                .writeDate(LocalDateTime.now())
                .likeByList(null)
                .hashTag(null)
                .commentId(null)
                .build();

        postRepository.insert(post);

        System.out.println(postRepository.findById(objectId).isPresent());

        postRepository.deleteById(objectId);

        User user = User.builder()
                .id(objectId)
                .email("test@test")
                .name("testName")
                .nickname("testNickName")
                .pwd("testPwd")
                .follower(null)
                .build();

        userRepository.insert(user);
        List<User> userList = userRepository.findAll();

        return "index";
    }
}
