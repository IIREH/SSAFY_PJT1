import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Recommend from '../components/api/Recommend';
import Classic from '../components/api/Classic';
import Musical from '../components/api/Musical';
import Footer from '../components/common/Footer';

const ListPage = () => {
  return (
    <>
      <HeaderContainer />
      <Recommend title="추천 예술 작품" />
      <Classic title="클래식" />
      <Musical title="뮤지컬" />
      <Footer />
    </>
  );
};

export default ListPage;
