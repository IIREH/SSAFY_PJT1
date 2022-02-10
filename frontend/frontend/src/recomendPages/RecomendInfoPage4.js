import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo4 from '../components/info/Recomend/RecomendConcertInfo4';

const RecomendInfoPage4 = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo4 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage4;