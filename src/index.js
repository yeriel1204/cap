import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import FindIDPage from './FindIDPage';
import FindPWPage from './FindPWPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/find-id" element={<FindIDPage />} />
        <Route path="/find-pw" element={<FindPWPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
