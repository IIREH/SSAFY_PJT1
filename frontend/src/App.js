import React from "react";
import "./App.css";
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
import ProfilePage from './pages/user/ProfilePage';
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app">
      {/* Inserting design components and fetch param from tmdb API */}
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/updateUserInfo" element={<UpdateUserInfoPage />} />
        <Route path="/post/write" element={<WritePage />} />
        <Route path="/post/@:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="/profile/:nickname" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

// Exporting App function. Making it available
export default App;
