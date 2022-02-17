import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import TheatreConcertInfo6 from '../components/info/Theatre/TheatreConcertInfo6';

const TheatreInfoPage6 = () => {
    return (
    <>
    <HeaderContainer />
    <TheatreConcertInfo6 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default TheatreInfoPage6;