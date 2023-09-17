import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

interface Props {
  initialPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  initialPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage === 1) {
      return;
    }

    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage === totalPages) {
      return;
    }

    handlePageChange(currentPage + 1);
  };

  return (
    <div>
      <nav className="pagination-container" aria-label="Pagination">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="button button--secondary"
        >
          <span className="icon">
            <ArrowLeft />
          </span>
          <span className="pagination-nav__label">Previous</span>
        </button>
        <span className="pagination-label">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className="button button--secondary"
        >
          <span className="pagination-nav__label">Next</span>
          <span className="icon">
            <ArrowRight />
          </span>
        </button>
      </nav>
    </div>
  );
}
