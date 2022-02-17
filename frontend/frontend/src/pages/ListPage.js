import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Recommend from '../components/api/Recommend';
import Classic from '../components/api/Classic';
import Musical from '../components/api/Musical';
import Footer from '../components/common/Footer';
import Theatre from '../components/api/Theatre';

const ListPage = () => {
  return (
    <>
      <HeaderContainer />
      <Recommend title="추천 작품" />
      <Classic title="클래식" />
      <Musical title="뮤지컬" />
      <Theatre title="연극" />
      <Footer />
    </>
  );
};

export default ListPage;
