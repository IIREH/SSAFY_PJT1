import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/post/PostListPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import WritePage from "./pages/post/WritePage";
import PostPage from "./pages/post/PostPage";
import UpdateUserInfoPage from "./pages/auth/UpdateUserInfoPage";
import HeaderContainer from './containers/common/HeaderContainer';

function App() {
  return (
    <div className="app">
      {/* Inserting design components and fetch param from tmdb API */}
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/updateUserInfo" element={<UpdateUserInfoPage />} />
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
