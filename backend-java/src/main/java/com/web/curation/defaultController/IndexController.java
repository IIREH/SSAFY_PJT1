package com.web.curation.defaultController;

import com.web.curation.model.BasicResponse;
import com.web.curation.model.entity.*;
import com.web.curation.model.service.repository.*;
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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


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
    private CommentRepository commentRepository;

    @Autowired
    private HashTagRepository hashTagRepository;

    @Autowired
    private ContestRepository contestRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String index(){
        log.info("call index");

//        인덱스 페이지 새로고침하며 테스트
        User user = User.builder()
                .email("test@test")
                .name("testName")
                .nickname("testNickName")
                .pwd("testPwd")
                .build();

        userRepository.insert(user);
        List<User> userList = userRepository.findAll();
        log.info("user list:{}",userList);

        Contest contest = Contest.builder()
                .id("AAA111")
                .name("테스트 공연")
                .startDate("2022-03-10")
                .endDate("2022-03-15")
                .location("세종문화회관")
                .poster("/poster.jpg")
                .genre("horror")
                .build();
        contestRepository.save(contest);
        log.info("contest list:{}", contestRepository.findAllByName("테스트 공연"));

        Comment comment = Comment.builder()
                .user(user)
                .content("testComment").build();
        commentRepository.save(comment);
        Optional<Comment> commentList = commentRepository.findAllByUser(user);
        log.info("comment list:{}", commentList);

        HashTag hashTag = HashTag.builder()
                .hashTag("hashTag").build();
        hashTagRepository.save(hashTag);
        List<HashTag> hashTagList = new ArrayList<>();
        hashTagList.add(hashTag);

        Post post = Post.builder()
                .contest(contest)
                .user(user)
                .content("테스트 공연에 관한 글")
                .likedByList(null)
                .hashTags(hashTagList)
                .comments(null)
                .build();
        postRepository.save(post);
        postRepository.save(post);

        Optional<Post> postList = postRepository.findAllByUser(user);
        log.info("post list:{}", postList);
        post.setContent("updated content");
        postRepository.save(post);
        postList = postRepository.findAllByUser(user);
        log.info("post list:{}", postList);

//        postRepository.deleteById(objectId);

        return "index";
    }
}
