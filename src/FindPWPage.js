import React from 'react';
import './FindPWPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // logo.png 파일을 import

const FindPWPage = () => {
  const navigate = useNavigate();

  return (
    <div className="find-pw-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="find-pw-form">
      < h3 className='find-pw-title'>비밀번호 찾기</h3>
        <input type="text" placeholder="ID" className="find-pw-input" />
        <input type="text" placeholder="이름" className="find-pw-input" />
        <input type="email" placeholder="이메일주소" className="find-pw-input" />
        <button type="submit" className="find-pw-button">비밀번호 찾기</button>
        <div className="back-login">
          <a href="#" onClick={() => navigate('/')}>로그인</a>
        </div>
      </form>
    </div>
  );
};

export default FindPWPage;
