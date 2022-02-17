import { useCallback, useState } from "react";
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";
import { Link } from "react-router-dom";
import client from '../../lib/api/client'
import { Card, CardGroup } from 'react-bootstrap'
import PostCardComponent from "./PostCardComponent";

const IconButton = styled(Responsive)`
  font-size: 1.25rem;
  position: absolute;
  left: 60%;
  color: ${palette.pink[5]};
`;

const PostsComponent = (params) => {
  const [mode, setMode] = useState('userPosts');
  const { userPosts, userLikesPosts } = params;
  const jwt = localStorage.getItem('jwt');
  const nickname = localStorage.getItem('user').replace(/"/gi, "");

  const onClickLike = (userPost) => {
    const postId = userPost.id
    const likeuser = userPost.likedByList && userPost.likedByList.filter(likeuser => {
      return nickname === likeuser.nickname      
    })

    if (likeuser.length !== 0) {
      client.delete(`/api/likePost?jwt=${jwt}&postId=${postId}`)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      client.post(`/api/likePost?jwt=${jwt}&postId=${postId}`)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }

  

  return(
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div style={{ textAlign: 'center'}}>
    <h3 style={{ display : 'inline', marginRight: 6}}>추억 목록 💨 </h3>
            <Button style={{ marginRight: 6, display: 'inline-block'}} onClick={() => setMode('userPosts')}>포스트</Button>
         
            <Button onClick={() => setMode('userLikesPosts')} style={{  marginRight: 6, display: 'inline-block'}}>관심목록</Button>
            <hr></hr>
          
    </div>
          {mode === 'userPosts' &&
            <CardGroup className="justify-content-start" style={{ marginLeft: 40, marginRight: 40 }}>
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <span className="row__posters">
                    <PostCardComponent userPost={userPost} onClickLike={onClickLike} />
                      {/* <Card>
                        <Link to={`/post/${userPost.id}`}>
                          <Card.Img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} variant="top" alt="..." />
                        </Link>
                        <Card.Body>
                          <Card.Text dangerouslySetInnerHTML={{ __html: userPost.content }}></Card.Text>
                          <IconButton><i onClick={() => onClickLike(userPost)} className="fa fa-heart"></i> {userPost.likedByList.length} Likes </IconButton>
                        </Card.Body>
                      </Card> */}
                  </span>
                </div>
              ))}
            </CardGroup>
          }
          {mode === 'userLikesPosts' &&
            <CardGroup className="justify-content-start">
              {userLikesPosts.map(userLikePost => (
                <div key={userLikePost.id}>
                  <span className="row__posters">
                    <Card>
                      <Card.Img src={`data:image/jpeg;base64,${userLikePost.photo.image.data}`} variant="top" alt="..." />
                      <Card.Body>
                        <Card.Text>{userLikePost.content}</Card.Text>
                      </Card.Body>
                    </Card>
                  </span>
                </div>
              ))}
            </CardGroup>
          }
          </>
  );
};

export default PostsComponent;