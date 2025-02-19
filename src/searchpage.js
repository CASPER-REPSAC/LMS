import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); // URL에서 query 값 가져오기

  return (
    <div>
      <h1>검색 결과</h1>
      <p>검색어: {query}</p>
      {/* 검색 결과 표시 */}
    </div>
  );
}

export default SearchPage;