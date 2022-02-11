import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo4 from '../components/info/Theatre/TheatreConcertInfo4';

const TheatreInfoPage4 = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo4 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage4;