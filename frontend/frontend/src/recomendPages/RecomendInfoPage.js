import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Footer from '../components/common/Footer';
import RecomendConcertInfo from '../components/info/Recomend/RecomendConcertInfo';

const RecomendInfoPage = () => {
    return (
    <>
    <HeaderContainer />
    <RecomendConcertInfo />
    <PostListContainer />
    <PaginationContainer />
    <Footer />
    </>

  );
};

export default RecomendInfoPage;