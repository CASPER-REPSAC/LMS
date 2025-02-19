import React, { useEffect } from 'react';
import Profile from './Mypage.js'
import Main from './main.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 추가
import './App.css';
import Topbar from './Topbar.js';
import Search from './searchpage.js';
import BookContent from './Item/Bookcontent.js';

function App() {
  useEffect(() => {
    document.title = 'CASPER 도서 관리 시스템';
  }, []);

  return (
    <BrowserRouter> {/* ✅ BrowserRouter로 감싸기 */}
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>
        <main className="App-body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Search' element={<Search/>}/>
            <Route path='/Content' element={<BookContent/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
