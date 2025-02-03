import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className="Topbar_body">
      <nav className="Menu"> {/* body 태그 대신 nav로 변경 */}
        <div id='logo'>
            <Link to="/">홈</Link> {/* ✅ 홈 링크 추가 */}
        </div>
        <div id='Menu_item'>
            <Link to="/Login">로그인</Link>
            <Link to="/New_Account">회원가입</Link>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
