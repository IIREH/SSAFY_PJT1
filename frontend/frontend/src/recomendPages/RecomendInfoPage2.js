import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo2 from '../components/info/Recomend/RecomendConcertInfo2';

const RecomendInfoPage2 = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo2 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage2;