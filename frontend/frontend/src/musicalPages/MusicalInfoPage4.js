import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo4 from '../components/info/Musical/MusicalConcertInfo4';

const MusicalInfoPage4 = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo4 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage4;