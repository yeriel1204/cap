import React from 'react';
import ReactDOM from 'react-dom/client';

import MovieGenre from './pages/MovieGenre';
import Home from './pages/Home';
import MovieTaste from './pages/MovieTaste';
import BookInfo from './pages/BookInfo';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import FindIDPage from './FindIDPage';
import ResetPWPage from './ResetPWPage';
import MyPage from './MyPage';
import EditUser from './EditUser';
import FriendList from './FriendList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path='/' element={<MovieGenre />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie" element={<MovieTaste/>}/>
        <Route path="/bookInfo" element={<BookInfo/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/find-id" element={<FindIDPage />} />
        <Route path="/reset-pw" element={<ResetPWPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/friend-list" element={<FriendList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
