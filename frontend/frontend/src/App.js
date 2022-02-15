import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import UpdateUserInfoPage from './pages/UpdateUserInfoPage'

import ClassicInfoPage from './classicPages/ClassicInfoPage';
import ClassicInfoPage2 from './classicPages/ClassicInfoPage2';
import ClassicInfoPage3 from './classicPages/ClassicInfoPage3';
import ClassicInfoPage4 from './classicPages/ClassicInfoPage4';
import ClassicInfoPage5 from './classicPages/ClassicInfoPage5';
import ClassicInfoPage6 from './classicPages/ClassicInfoPage6';

import RecomendInfoPage from './recomendPages/RecomendInfoPage';
import RecomendInfoPage2 from './recomendPages/RecomendInfoPage2';
import RecomendInfoPage3 from './recomendPages/RecomendInfoPage3';
import RecomendInfoPage4 from './recomendPages/RecomendInfoPage4';
import RecomendInfoPage5 from './recomendPages/RecomendInfoPage5';
import RecomendInfoPage6 from './recomendPages/RecomendInfoPage6';

import MusicalInfoPage from './musicalPages/MusicalInfoPage';
import MusicalInfoPage2 from './musicalPages/MusicalInfoPage2';
import MusicalInfoPage3 from './musicalPages/MusicalInfoPage3';
import MusicalInfoPage4 from './musicalPages/MusicalInfoPage4';
import MusicalInfoPage5 from './musicalPages/MusicalInfoPage5';
import MusicalInfoPage6 from './musicalPages/MusicalInfoPage6';

import TheatreInfoPage from './theatrePages/TheatreInfoPage';
import TheatreInfoPage2 from './theatrePages/TheatreInfoPage2';
import TheatreInfoPage3 from './theatrePages/TheatreInfoPage3';
import TheatreInfoPage4 from './theatrePages/TheatreInfoPage4';
import TheatreInfoPage5 from './theatrePages/TheatreInfoPage5';
import TheatreInfoPage6 from './theatrePages/TheatreInfoPage6';
import ProfilePage from './pages/ProfilePage';
import './App.css'

const App = () => {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/updateUserInfo" element={<UpdateUserInfoPage />} />
      <Route path="/write" element={<WritePage />} />

      <Route path="/classic" element={<ClassicInfoPage />} />
      <Route path="/classic2" element={<ClassicInfoPage2 />} />
      <Route path="/classic3" element={<ClassicInfoPage3 />} />
      <Route path="/classic4" element={<ClassicInfoPage4 />} />
      <Route path="/classic5" element={<ClassicInfoPage5 />} />
      <Route path="/classic6" element={<ClassicInfoPage6 />} />

      <Route path="/recommend" element={<RecomendInfoPage />} />
      <Route path="/recommend2" element={<RecomendInfoPage2 />} />
      <Route path="/recommend3" element={<RecomendInfoPage3 />} />
      <Route path="/recommend4" element={<RecomendInfoPage4 />} />
      <Route path="/recommend5" element={<RecomendInfoPage5 />} />
      <Route path="/recommend6" element={<RecomendInfoPage6 />} />

      <Route path="/musical" element={<MusicalInfoPage />} />
      <Route path="/musical2" element={<MusicalInfoPage2 />} />
      <Route path="/musical3" element={<MusicalInfoPage3 />} />
      <Route path="/musical4" element={<MusicalInfoPage4 />} />
      <Route path="/musical5" element={<MusicalInfoPage5 />} />
      <Route path="/musical6" element={<MusicalInfoPage6 />} />

      <Route path="/theatre" element={<TheatreInfoPage />} />
      <Route path="/theatre2" element={<TheatreInfoPage2 />} />
      <Route path="/theatre3" element={<TheatreInfoPage3 />} />
      <Route path="/theatre4" element={<TheatreInfoPage4 />} />
      <Route path="/theatre5" element={<TheatreInfoPage5 />} />
      <Route path="/theatre6" element={<TheatreInfoPage6 />} />

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
