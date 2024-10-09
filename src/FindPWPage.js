import React, { useState } from 'react';
import './FindPWPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; 

const FindPWPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    password: '',
    confirmPassword: ''
  });

  // 비밀번호 확인
  const validatePassword = () => {
    let errors = { password: '', confirmPassword: '' };

    if (!password) {
      errors.password = '비밀번호를 입력해주세요.';
    }

    if (!confirmPassword) {
      errors.confirmPassword = '비밀번호를 확인해주세요.';
    }

    if (password && confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrorMessage(errors);

    return !errors.password && !errors.confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validatePassword()) {
      // 비밀번호 재설정
    }
  };

  return (
    <div className="find-pw-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="find-pw-form" onSubmit={handleSubmit}>
        <h3 className='find-pw-title'>비밀번호 재설정</h3>
        <input 
          type="text" 
          placeholder="아이디" 
          className="find-pw-input" 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          className="find-pw-input" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* 비밀번호 입력 오류 메시지 */}
        {errorMessage.password && <p className="error-message">{errorMessage.password}</p>}
        
        <input 
          type="password" 
          placeholder="비밀번호 확인" 
          className="find-pw-input" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* 비밀번호 확인 오류 메시지 */}
        {errorMessage.confirmPassword && <p className="error-message">{errorMessage.confirmPassword}</p>}
        
        <button 
          type="submit" 
          className="find-pw-button"
        >
          비밀번호 재설정
        </button>
        <div className="back-login">
          <a href="#" onClick={() => navigate('/')}>로그인</a> | 
          <a href="#" onClick={() => navigate('/signin')}>회원가입</a>
        </div>
      </form>
    </div>
  );
};

export default FindPWPage;
