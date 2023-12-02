import React from "react";

const Pagenation = ({
  pageNumbers,
  currentPage,
  handleCurrentPageChange,
  total_pages,
}) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {currentPage > 1 && (
            <li
              className="page-item primary"
              onClick={() => {
                handleCurrentPageChange(currentPage - 1);
              }}
              style={{cursor:'pointer'}}

            >
              <a className="page-link">Previous</a>
            </li>
          )}
          {pageNumbers &&
            pageNumbers.map((item, index) => {
              return (
                <li
                  className={`page-item ${
                    currentPage === item ? "active" : ""
                  }`}
                  onClick={() => handleCurrentPageChange(item)}
                  style={{cursor:'pointer'}}
                >
                  <a className="page-link">{item}</a>
                </li>
              );
            })}

          {currentPage < total_pages && (
            <li
              className="page-item"
              onClick={() => {
                handleCurrentPageChange(currentPage + 1);
              }}
              style={{cursor:'pointer'}}

            >
              <a className="page-link">Next</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagenation;
