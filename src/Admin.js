import { useState } from "react";
import "./Admin.css"; // Assuming styles are defined in this CSS file

const PAGE_SIZE = 10;

function Mypage() {
  const [activeTab, setActiveTab] = useState("borrow");
  const [currentPage, setCurrentPage] = useState(0);

  const borrowData = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", borrowed_date: "2025-01-01", borrowed: "John" },
    { title: "1984", author: "George Orwell", borrowed_date: "2025-01-10", borrowed: "John" },
    // Add more mock data as needed
  ];

  const returnData = [
    { title: "To Kill a Mockingbird", loan_date: "2025-01-15", return_date: "2025-01-22", returned: "John" },
    { title: "Pride and Prejudice", loan_date: "2025-01-20", return_date: "2025-01-22", returned: "John" },
    // Add more mock data as needed
  ];

  const paginatedData = (data) => {
    const startIndex = currentPage * PAGE_SIZE;
    return data.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * PAGE_SIZE < (activeTab === "borrow" ? borrowData.length : returnData.length)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
                <th>Who borrow</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData(borrowData).map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.date}</td>
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
                <th>loan_date</th>
                <th>Return Date</th>
                <th>Who borrow</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData(returnData).map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.date}</td>
                  <td>{book.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button className="tab-button" onClick={handlePreviousPage} disabled={currentPage === 0}>
          이전 페이지
        </button>
        <button
          className="tab-button"
          onClick={handleNextPage}
          disabled={(currentPage + 1) * PAGE_SIZE >= (activeTab === "borrow" ? borrowData.length : returnData.length)}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default Mypage;