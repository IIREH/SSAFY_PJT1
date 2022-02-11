import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ClassicConcertInfo from '../components/info/Classic/ClassicConcertInfo';

const ClassicInfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <ClassicConcertInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default ClassicInfoPage;