import React from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // logo.png 파일을 import

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="signup-form">
        <h3 className='signup-title'>회원가입</h3>
        <input type="text" placeholder="아이디" className="signup-input" />
        <input type="password" placeholder="비밀번호" className="signup-input" />
        <input type="text" placeholder="이름" className="signup-input" />
        <input type="email" placeholder="이메일주소" className="signup-input" />
        <button type="submit" className="signup-button">회원가입</button>
        <div className="back-login">
          <a href="#" onClick={() => navigate('/')}>이미 계정이 있으신가요?</a>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
