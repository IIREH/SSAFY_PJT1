import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo3 from '../components/info/Musical/MusicalConcertInfo3';

const MusicalInfoPage3 = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo3 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage3;