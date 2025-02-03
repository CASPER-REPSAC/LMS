import './App.css';
import search_img from './search.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className="Topbar_body">
      <nav className="Topbar_item"> {/* body 태그 대신 nav로 변경 */}
        <div className='logo'>
            <Link to="/">로고</Link> {/* 로고는 곧 고칠예정 */}
        </div>
        <div className="searching">
          <input type="search"></input>
          <select>
            <option>전체</option>
            <option>기타</option>
          </select>
          <img src={search_img} alt="search_img" />
        </div>
        <div className="profile">
          <p>프로필 예정</p>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
