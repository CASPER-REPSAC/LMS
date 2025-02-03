import React, { useEffect } from 'react';
import Login from './account/login.js'
import Account from './account/new_account.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 추가
import './App.css';
import Topbar from './Topbar';

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
            <Route path="/" element={<h1>CASPER 도서 관리 시스템에 오신 것을 환영합니다!</h1>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/New_Account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
