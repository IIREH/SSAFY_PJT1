import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo from '../components/info/Theatre/TheatreConcertInfo';

const TheatreInfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage;