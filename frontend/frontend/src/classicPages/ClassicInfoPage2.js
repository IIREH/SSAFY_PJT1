import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo2 from '../components/info/Classic/ClassicConcertInfo2';

const ClassicInfoPage2 = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo2 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage2;