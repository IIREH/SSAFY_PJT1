import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo4 from '../components/info/Classic/ClassicConcertInfo4';

const ClassicInfoPage4 = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo4 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage4;