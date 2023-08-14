import React from "react";

const Paginate = ({
  paginate,
  previousPage,
  nextPage,
  currentPage,
  lastPage,
}) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mx-auto">
        <li
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
          onClick={previousPage}
        >
          <div
            className="page-link"
            aria-label="Previous"
            style={{ cursor: "pointer" }}
          >
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {currentPage !== 1 && (
          <li className="page-item" onClick={() => paginate(1)}>
            <div className="page-link">1</div>
          </li>
        )}
        <li className="page-item active">
          <div className="page-link">{currentPage}</div>
        </li>

        {currentPage !== lastPage && (
          <li className="page-item" onClick={() => paginate(lastPage)}>
            <div className="page-link">{lastPage}</div>
          </li>
        )}
        <li
          className={
            currentPage === lastPage ? "page-item disabled" : "page-item"
          }
          onClick={nextPage}
        >
          <div
            className="page-link"
            aria-label="Next"
            style={{ cursor: "pointer" }}
          >
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
