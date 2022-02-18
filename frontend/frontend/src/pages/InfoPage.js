import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import ConcertInfo from '../components/info/ConcertInfo';

const InfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <ConcertInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default InfoPage;