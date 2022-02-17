import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo6 from '../components/info/Classic/ClassicConcertInfo6';

const ClassicInfoPage6 = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo6 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage6;