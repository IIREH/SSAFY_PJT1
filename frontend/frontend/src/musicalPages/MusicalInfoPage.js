import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MusicalConcertInfo from '../components/info/Musical/MusicalConcertInfo';

const MusicalInfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <MusicalConcertInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default MusicalInfoPage;