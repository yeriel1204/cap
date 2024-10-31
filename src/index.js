import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieGenre from './pages/MovieGenre';
import Home from './pages/Home';
import MovieTaste from './pages/MovieTaste';
import BookInfo from './pages/BookInfo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path='/' element={<MovieGenre />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie" element={<MovieTaste/>}/>
        <Route path="/bookInfo" element={<BookInfo/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();