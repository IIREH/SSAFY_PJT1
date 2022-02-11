import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo3 from '../components/info/Classic/ClassicConcertInfo3';

const ClassicInfoPage3 = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo3 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage3;