import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo2 from '../components/info/Musical/MusicalConcertInfo2';

const MusicalInfoPage2 = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo2 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage2;