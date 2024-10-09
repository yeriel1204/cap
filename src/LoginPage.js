import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const LoginPage = () => {
  const navigate = useNavigate();

  //아이디 유효 + 비밀번호 확인

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="login-form">
        <h3 className='login-title'>로그인</h3>
        <input type="text" placeholder="아이디" className="login-input" />
        <input type="password" placeholder="비밀번호" className="login-input" />
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">로그인 유지</label>
        </div>
        <button type="submit" className="login-button">로그인</button>
        <button type="button" className="signin-button" onClick={() => navigate('/signin')}>회원가입</button>
        <div className="helper-links">
          <a href="#" onClick={() => navigate('/find-id')}>아이디 찾기</a> | 
          <a href="#" onClick={() => navigate('/find-pw')}>비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
