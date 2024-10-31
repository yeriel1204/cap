import React from 'react';
import './EditUser.css';
import BottomNavigation from './BottomNavigation';
import { useNavigate } from 'react-router-dom'; 

const EditUser = () => {
  const navigate = useNavigate(); 

  return (
    <div className="edit-user-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/mypage')}>{'<'}</button>
        <h1 className="edit-user-title">회원정보 수정</h1>
        <div className="back-button-placeholder"></div> 
      </div>
      <form className="edit-user-form">
        <label>아이디</label>
        <input type="text" className="signup-input" readOnly />
        <label>비밀번호</label>
        <input type="password" className="signup-input" />
        <label>이름</label>
        <input type="text" className="signup-input" />
        <label>이메일 주소</label>
        <input type="email" className="signup-input" />
        <button type="submit" className="signup-button">수정</button>
      </form>
      <BottomNavigation />
    </div>
  );
};

export default EditUser;
