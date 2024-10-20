import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      id: username, 
      password : password
    };

    try {
      const response = await axios.post('http://34.64.95.62:8080/user/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json' 
        }
      });

      if (response.status === 200) {
        alert('로그인 성공');
        localStorage.setItem('token', response.data.token);
        navigate('/mypage'); // 임시
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage('아이디와 비밀번호를 확인해주세요.');
        } else {
          setErrorMessage(error.response.data.message || '로그인에 실패했습니다.');
        }
      } else {
        console.error('Error:', error);
        setErrorMessage('서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h3 className='login-title'>로그인</h3>
        <input 
          type="text" 
          placeholder="아이디" 
          className="login-input" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          className="login-input" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">로그인 유지</label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">로그인</button>
        <button type="button" className="signin-button" onClick={() => navigate('/signin')}>회원가입</button>
        <button type="button" className="signin-button" onClick={() => navigate('/mypage')}>마이페이지 화면으로</button>
        <div className="helper-links">
          <a href="#" onClick={() => navigate('/find-id')}>아이디 찾기</a> | 
          <a href="#" onClick={() => navigate('/reset-pw')}>비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
