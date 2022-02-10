import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo5 from '../components/info/Theatre/TheatreConcertInfo5';

const TheatreInfoPage5 = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo5 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage5;