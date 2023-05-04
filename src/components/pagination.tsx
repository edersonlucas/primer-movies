import { useRouter } from 'next/router';
import { useState } from 'react';

import IPagination from 'interfaces/IPagination';

interface PaginationProps {
  pagination: IPagination;
}

export default function Pagination({ pagination }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(pagination.page);

  const router = useRouter();

  const handleClick = (page: number) => {
    setCurrentPage(page);
    router.push(`/movies/${page}`);
  };

  const previousPage = () => {
    setCurrentPage(pagination.page - 1);
    router.push(`/movies/${pagination.page - 1}`);
  };

  const nextPage = () => {
    setCurrentPage(pagination.page + 1);
    router.push(`/movies/${pagination.page + 1}`);
  };

  return (
    <nav
      aria-label="Paginação"
      className="mb-4 mt-4 flex items-center gap-1 text-[0.75rem] text-primary md:mt-0"
    >
      <button
        className="pagination-button-prev"
        disabled={pagination.page === 1}
        aria-label="Botão para pagina anterior"
        onClick={previousPage}
      >
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25 16.2024L1.75 8.70239L9.25 1.20239"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {!(pagination.page === 1) && (
        <button
          className={`${
            currentPage === 1
              ? 'pagination-button-selected'
              : 'pagination-button-not-selected'
          }`}
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        >
          1
        </button>
      )}
      {pagination.page > 2 && (
        <button disabled className="rounded px-3 py-2">
          ...
        </button>
      )}
      {pagination.page === pagination.maxPage && (
        <button
          className={`${
            currentPage === pagination.page - 1
              ? 'pagination-button-selected'
              : 'pagination-button-not-selected'
          }`}
          onClick={() => handleClick(pagination.page - 1)}
          disabled={currentPage === pagination.page - 1}
        >
          {pagination.page - 1}
        </button>
      )}
      <button
        className={`${
          currentPage === pagination.page
            ? 'pagination-button-selected'
            : 'pagination-button-not-selected'
        }`}
        onClick={() => handleClick(pagination.page)}
        disabled={currentPage === pagination.page}
      >
        {pagination.page}
      </button>

      {pagination.page < pagination.maxPage - 1 && (
        <>
          <button
            className={`${
              currentPage === pagination.page + 1
                ? 'pagination-button-selected'
                : 'pagination-button-not-selected'
            }`}
            onClick={() => handleClick(pagination.page + 1)}
            disabled={currentPage === pagination.page + 1}
          >
            {pagination.page + 1}
          </button>
          <button disabled className="rounded px-3 py-2">
            ...
          </button>
          <button
            className={`${
              currentPage === pagination.maxPage
                ? 'pagination-button-selected'
                : 'pagination-button-not-selected'
            }`}
            onClick={() => handleClick(pagination.maxPage)}
            disabled={currentPage === pagination.maxPage}
          >
            {pagination.maxPage}
          </button>
        </>
      )}

      {pagination.page === pagination.maxPage - 1 && (
        <button
          className={`${
            currentPage === pagination.maxPage
              ? 'pagination-button-selected'
              : 'pagination-button-not-selected'
          }`}
          onClick={() => handleClick(pagination.maxPage)}
          disabled={currentPage === pagination.maxPage}
        >
          {pagination.maxPage}
        </button>
      )}

      <button
        className="pagination-button-next"
        disabled={pagination.page === pagination.maxPage}
        onClick={nextPage}
        aria-label="Botão para a pagina seguinte"
      >
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 1.20239L9.25 8.70239L1.75 16.2024"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
