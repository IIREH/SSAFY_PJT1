import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo5 from '../components/info/Recomend/RecomendConcertInfo5';

const RecomendInfoPage5 = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo5 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage5;