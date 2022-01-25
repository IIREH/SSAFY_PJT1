import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="app">
      {/* Inserting design components and fetch param from tmdb API */}
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
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
