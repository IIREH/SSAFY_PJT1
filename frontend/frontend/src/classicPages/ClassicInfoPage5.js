import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo5 from '../components/info/Classic/ClassicConcertInfo5';

const ClassicInfoPage5 = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo5 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage5;