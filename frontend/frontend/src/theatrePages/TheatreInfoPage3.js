import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo3 from '../components/info/Theatre/TheatreConcertInfo3';

const TheatreInfoPage3 = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo3 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage3;