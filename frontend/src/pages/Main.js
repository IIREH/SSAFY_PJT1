import React from 'react';
import Row from '../Row'
import Banner from "../Banner";

const Main = () => {
  return (
    <div>
      <Banner />
      <Row title="추천 예술 작품" />
      <Row title="사진전" />
      <Row title="뮤지컬" />
      <Row title="클래식" />
      <Row title="사진" />
      <Row title="오페라" />
    </div>
  );
};

export default Main;