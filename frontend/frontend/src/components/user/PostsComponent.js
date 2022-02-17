import {  useState } from "react";
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";
import "./Profile.css";
import { Link } from "react-router-dom";
import client from '../../lib/api/client'

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
    console.log(userPost.user.email)
    
    userPost.likedByList.map((likeuser) => {
      // 이미 좋아요를 누른 목록에 있다면 좋아요 취소
      if (nickname === likeuser.nickname) {
        console.log(likeuser.nickname)
        client.delete(`/api/likePost?jwt=${jwt}&postId=${postId}`)
          .then(res => {
            console.log(res)
          })
          .catch(e => {
            console.log(e)
          })
      }
      // 목록에 없다면 좋아요
      client.post(`/api/likePost?jwt=${jwt}&postId=${postId}`)
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })

      return likeuser
    })
    // 목록에 없다면 좋아요
    client.post(`/api/likePost?jwt=${jwt}&postId=${postId}`)
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return(
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div style={{ display: 'inline' }}>
            <Button style={{ display: 'inline'}} onClick={() => setMode('userPosts')}>포스트</Button>
         
            <Button onClick={() => setMode('userLikesPosts')} style={{ marginLeft: 5, display: 'inline'}}>관심목록</Button>
            <hr></hr>
          
        </div>
          {mode === 'userPosts' &&
            <div className="row row-cols-3 g-4 justify-content-start">
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <div className="col">                    
                    <div className="card">
                      <Link to={`/post/${userPost.id}`}>
                        <img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: userPost.content }}></p>
                        <IconButton><i onClick={() => onClickLike(userPost)} className="fa fa-heart"></i> {userPost.likedByList.length} Likes </IconButton>
                      </div>
                    </div>                    
                  </div>
                </div>
              ))}
            </div>
          }
          {mode === 'userLikesPosts' &&
            <div className="row row-cols-3 g-4 justify-content-start">
              {userLikesPosts.map(userLikePost => (
                <div key={userLikePost.id}>
                  <div className="col">
                    <div className="card">
                      <img src={`data:image/jpeg;base64,${userLikePost.photo.image.data}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{userLikePost.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          </>
  );
};


export default PostsComponent;