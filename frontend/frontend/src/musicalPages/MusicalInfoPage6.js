import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo6 from '../components/info/Musical/MusicalConcertInfo6';

const MusicalInfoPage6 = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo6 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage6;