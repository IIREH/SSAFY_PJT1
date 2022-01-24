import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* Inserting design components and fetch param from tmdb API */}
      <Nav />
      <Banner />
      <Row title="추천 예술 작품" />
      <Row title="사진전" />
      <Row title="뮤지컬" />
      <Row title="클래식" />
      <Row title="사진" />
      <Row title="오페라" />

    </div>
  );
}

// Exporting App function. Making it available
export default App;
