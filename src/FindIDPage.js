import React from 'react';
import './FindIDPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; 

const FindIDPage = () => {
  const navigate = useNavigate();

  //이름 이메일주소 일치 여부 확인

  return (
    <div className="find-id-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="find-id-form">
        <h3 className='find-id-title'>아이디 찾기</h3>
        <input type="text" placeholder="이름" className="find-id-input" />
        <input type="email" placeholder="이메일주소" className="find-id-input" />
        <button type="submit" className="find-id-button">아이디 찾기</button>
        <div className="back-login">
          <a href="#" onClick={() => navigate('/')}>로그인</a> | 
          <a href="#" onClick={() => navigate('/signin')}>회원가입</a>
        </div>
      </form>
    </div>
  );
};

export default FindIDPage;
