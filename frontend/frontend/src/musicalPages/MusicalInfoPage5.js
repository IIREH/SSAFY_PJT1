import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo5 from '../components/info/Musical/MusicalConcertInfo5';

const MusicalInfoPage5 = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo5 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage5;