import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookContent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const bookTitle = params.get("title");
  const bookImage = params.get("image");

  // ✅ localStorage에서 대출 상태 가져오기
  const storedStatus = localStorage.getItem(`borrowed_${bookTitle}`);
  const [isBorrowed, setIsBorrowed] = useState(storedStatus === "true");

  useEffect(() => {
    // ✅ 대출 상태 변경 시 localStorage에 저장
    localStorage.setItem(`borrowed_${bookTitle}`, isBorrowed.toString());
  }, [isBorrowed, bookTitle]);

  // ✅ 대출 버튼 클릭 이벤트
  const handleBorrow = () => {
    setIsBorrowed(true); // 대출 상태 변경
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>도서 상세 정보</h1>
      {bookImage && <img src={bookImage} alt={bookTitle} style={{ width: "300px", height: "400px" }} />}
      <h2>{bookTitle}</h2>
      <p>책에 대한 설명을 여기에 추가하세요.</p>

      <div style={{ marginTop: "20px" }}>
        {/* ✅ 버튼이 "대출 중"이면 사라지고, "대출 중" 글씨만 표시됨 */}
        {!isBorrowed ? (
          <button 
            onClick={handleBorrow} 
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            대출하기
          </button>
        ) : (
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>대출 중</p>
        )}
      </div>
    </div>
  );
};

export default BookContent;
