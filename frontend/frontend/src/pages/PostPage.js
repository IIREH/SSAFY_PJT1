import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import Button from '../components/common/Button';
import "./Page.css";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <div className='btn'>
        <Button cyan to="/">
          뒤로가기
        </Button>
      </div>
    </>
  );
};

export default PostPage;
