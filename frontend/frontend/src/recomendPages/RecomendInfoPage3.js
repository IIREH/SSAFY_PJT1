import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo3 from '../components/info/Recomend/RecomendConcertInfo3';

const RecomendInfoPage3 = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo3 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage3;