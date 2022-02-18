import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
// import Button from '../components/common/Button';
// import "./Page.css";

const PostPage = () => {
  const { postId } = useParams();

  return (
    <>
      <HeaderContainer />
      <PostViewerContainer postId={postId} />
    </>
  );
};

export default PostPage;
