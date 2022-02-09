import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UpdateUserInfoPage from './pages/UpdateUserInfoPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import InfoPage from './pages/InfoPage';
import './App.css'
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/updateUserInfo" element={<UpdateUserInfoPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/@:username">
        <Route index element={<ListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
      <Route path="/profile/:nickname" element={<ProfilePage />} />
    </Routes>
    </div>
  );
};
export default App;
