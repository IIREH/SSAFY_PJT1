import {  useState } from "react";
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";
import "./Profile.css";
import { Link } from "react-router-dom";

const IconButton = styled(Responsive)`
  font-size: 1.25rem;
  position: absolute;
  left: 60%;
  color: ${palette.pink[5]};
`;

const PostsComponent = (params) => {
  const [mode, setMode] = useState('userPosts');
  const { userPosts, userLikesPosts } = params;
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

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
                    <Link to={`/post/${userPost.id}`}>
                      <div className="card">
                        <img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <p className="card-text">{userPost.content}</p>
                          <IconButton><i onClick={onIncrease} className="fa fa-heart"></i> {count} Likes </IconButton>
                        </div>
                      </div>
                    </Link>
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