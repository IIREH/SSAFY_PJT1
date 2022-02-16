import {  useState } from "react";
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { Card, CardGroup } from 'react-bootstrap'

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
                    <Link to={`/post/${userPost.id}`}>
                      <Card>
                        <Card.Img src={`data:image/jpeg;base64,${userPost.photo.image.data}`} variant="top" alt="..." />
                        <Card.Body>
                          <Card.Text>{userPost.content}</Card.Text>
                          <IconButton><i onClick={onIncrease} className="fa fa-heart"></i> {count} Likes </IconButton>
                        </Card.Body>
                      </Card>
                    </Link>
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