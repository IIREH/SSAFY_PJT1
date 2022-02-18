import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo6 from '../components/info/Recomend/RecomendConcertInfo6';

const RecomendInfoPage6 = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo6 />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage6;