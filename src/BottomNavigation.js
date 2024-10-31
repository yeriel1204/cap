import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomNavigation.css';
import search from './icon/search.png';
import openbook from './icon/open-book-push.png';
import clapperboard from './icon/clapperboard-copy.png';

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-navigation">
      <button onClick={() => navigate('/search')}><img src={search} alt="search" className="bottom-navigation-image"/>영화 검색</button>
      <button onClick={() => navigate('/my-movie')}><img src={openbook} alt="openbook" className="bottom-navigation-image" />내 영화</button>
      <button onClick={() => navigate('/my-book')}><img src={clapperboard} alt="clapperboard" className="bottom-navigation-image" />내 도서</button>
    </div>
  );
};

export default BottomNavigation;
