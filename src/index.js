import React from 'react';
import ReactDOM from 'react-dom/client';
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
