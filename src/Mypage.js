import { useState } from "react";
import "./Mypage.css"; // Assuming styles are defined in this CSS file

const PAGE_SIZE = 10;

function Mypage() {
  const [activeTab, setActiveTab] = useState("borrow");
  const [currentPage, setCurrentPage] = useState(0);

  const borrowData = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", loan_date: "2025-01-01"},
    { title: "1984", author: "George Orwell", loan_date: "2025-01-10"},
    // Add more mock data as needed
  ];

  const returnData = [
    { title: "To Kill a Mockingbird", author: "F. Scott Fitzgerald", loan_date: "2025-01-15", return_date: "2025-01-22"},
    { title: "Pride and Prejudice", author: "George Orwell", loan_date: "2025-01-20", return_date: "2025-01-22"},
    // Add more mock data as needed
  ];


  const totalPages = Math.ceil((activeTab === "borrow" ? borrowData.length : returnData.length) / PAGE_SIZE);

  const paginatedData = (data) => {
    const startIndex = currentPage * PAGE_SIZE;
    return data.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(0, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage >= totalPages) {
      endPage = totalPages - 1;
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }

    if (startPage > 0) pageNumbers.push(<button key="first" onClick={() => handlePageClick(0)}>{"<<"}</button>);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`tab-button ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }

    if (endPage < totalPages - 1) pageNumbers.push(<button key="last" onClick={() => handlePageClick(totalPages - 1)}>{">>"}</button>);

    return pageNumbers;
  };

  return (
    <div className="p-4 text-gray-200 bg-gray-900 min-h-screen">
      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-400">Avid reader and book enthusiast</p>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-start space-x-4 mb-2">
        <button
          className={`tab-button ${activeTab === "borrow" ? "active" : ""}`}
          onClick={() => handleTabChange("borrow")}
        >
          도서 대출
        </button>
        <button
          className={`tab-button ${activeTab === "return" ? "active" : ""}`}
          onClick={() => handleTabChange("return")}
        >
          도서 반납
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        {activeTab === "borrow" ? (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>loan_date</th>
                <th>return?</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData(borrowData).map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.loan_date}</td>
                  <td><button className="action-button">반납하기</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>loan_date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData(returnData).map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.loan_date}</td>
                  <td>{book.return_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        {renderPageNumbers()}
      </div>
    </div>
  );
}

export default Mypage;
