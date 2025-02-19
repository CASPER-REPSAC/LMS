import './App.css';
import search_img from './search.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Topbar() {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

  // 엔터 키를 누르면 검색 페이지로 이동하는 함수
  const EnterKey = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const Click_Image = () => {
    if(searchTerm.trim() !== ''){
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  }

  return (
    <div className="Topbar_body">
      <nav className="Topbar_item">
        <div className='logo'>
            <Link to="/">로고</Link>
        </div>
        <div className="searching">
          <input 
            type="search" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            onKeyDown={EnterKey} // 엔터 키 이벤트
            placeholder="도서검색"
          />
          <select>
            <option>전체</option>
            <option>기타</option>
          </select>
          <img src={search_img} alt="search_img" onClick={Click_Image} />
        </div>
        <div id='Menu_item'>
            <Link to="/Profile">profile</Link>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;

