import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import MovieInfo from '../components/info/MovieInfo';

const InfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <MovieInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default InfoPage;