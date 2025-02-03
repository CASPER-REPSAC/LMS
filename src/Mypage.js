import { useState } from "react";
import AL_Start from './image/AI_start.jpg';
import "./Mypage.css"; // Assuming styles are defined in this CSS file

function Mypage() {
  const [activeTab, setActiveTab] = useState("borrow");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src= {AL_Start}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-600">Avid reader and book enthusiast</p>
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
                <th>Borrow Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Great Gatsby</td>
                <td>F. Scott Fitzgerald</td>
                <td>2025-01-01</td>
                <td><button className="action-button">반납하기</button></td>
              </tr>
              <tr>
                <td>1984</td>
                <td>George Orwell</td>
                <td>2025-01-10</td>
                <td><button className="action-button">반납하기</button></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>To Kill a Mockingbird</td>
                <td>F. Scott Fitzgerald</td>
                <td>2025-01-01</td>
                <td>2025-01-01</td>
              </tr>
              <tr>
                <td>Pride and Prejudice</td>
                <td>George Orwell</td>
                <td>2025-01-10</td>
                <td>2025-01-10</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Mypage;
