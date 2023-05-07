import { useRouter } from 'next/router';
import { useState } from 'react';

import IPagination from 'interfaces/IPagination';

interface PaginationProps {
  pagination: IPagination;
}

export default function Pagination({
  pagination: { page, maxPage }
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(
    page > maxPage ? maxPage : page
  );

  const router = useRouter();

  const numberOfPages = Array(maxPage)
    .fill(0)
    .map((_item, i) => i + 1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    router.push(`/movies/${page}`);
  };

  const previousPage = () => {
    setCurrentPage(page - 1);
    router.push(`/movies/${page - 1}`);
  };

  const nextPage = () => {
    setCurrentPage(page + 1);
    router.push(`/movies/${page + 1}`);
  };

  return (
    <nav
      aria-label="Paginação"
      className="my-4 flex max-w-xs items-center gap-[0.15rem] text-[0.80rem] text-primary md:mt-0"
    >
      <button
        className="pagination-button-prev"
        disabled={currentPage === 1}
        aria-label="Botão para pagina anterior"
        onClick={previousPage}
      >
        <svg
          width="11"
          height="20"
          viewBox="0 0 11 19"
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

      {numberOfPages.length < 6 ? (
        numberOfPages.map((number) => (
          <button
            key={number}
            className={`${
              currentPage === number
                ? 'pagination-button-selected'
                : 'pagination-button-not-selected'
            }`}
            onClick={() => handleClick(number)}
            disabled={currentPage === number}
          >
            {number}
          </button>
        ))
      ) : (
        <>
          {page !== 1 && (
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

          {page > 3 && (
            <button disabled className="rounded px-1 py-2">
              ...
            </button>
          )}

          {page > maxPage - 2
            ? numberOfPages.slice(page - 3, page + 1).map((number) => (
                <button
                  key={number}
                  className={`${
                    currentPage === number
                      ? 'pagination-button-selected'
                      : 'pagination-button-not-selected'
                  }`}
                  onClick={() => handleClick(number)}
                  disabled={currentPage === number}
                >
                  {number}
                </button>
              ))
            : numberOfPages
                .slice(
                  page > 2 ? page - 2 : page - 1,
                  page > 2 ? page + 1 : page + 2
                )
                .map((number) => (
                  <button
                    key={number}
                    className={`${
                      currentPage === number
                        ? 'pagination-button-selected'
                        : 'pagination-button-not-selected'
                    }`}
                    onClick={() => handleClick(number)}
                    disabled={currentPage === number}
                  >
                    {number}
                  </button>
                ))}

          {page < maxPage - 2 && (
            <button disabled className="rounded px-1 py-2">
              ...
            </button>
          )}

          {page < maxPage - 1 && (
            <button
              className={`${
                currentPage === maxPage
                  ? 'pagination-button-selected'
                  : 'pagination-button-not-selected'
              }`}
              onClick={() => handleClick(maxPage)}
              disabled={currentPage === maxPage}
            >
              {maxPage}
            </button>
          )}
        </>
      )}

      <button
        className="pagination-button-next"
        disabled={page === maxPage}
        onClick={nextPage}
        aria-label="Botão para a pagina seguinte"
      >
        <svg
          width="11"
          height="20"
          viewBox="0 0 11 19"
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
