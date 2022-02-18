import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo2 from '../components/info/Theatre/TheatreConcertInfo2';

const TheatreInfoPage2 = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo2 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage2;