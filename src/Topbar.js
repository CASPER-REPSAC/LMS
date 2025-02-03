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
            <Link to="/Profile">profile</Link>
        </div>
      </nav>
      <div id="progress_bar" class="progress_bar"></div>
    </div>
  );
}

export default Topbar;
