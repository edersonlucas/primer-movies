import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import IFetchMoviesResponse from 'interfaces/IFetchMoviesResponse';
import IMovie from 'interfaces/IMovie';
import IPagination from 'interfaces/IPagination';
import api from 'services/api';

export default function useFetchMovies(limit = 18) {
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);
  const {
    push,
    query: { page }
  } = useRouter();

  useEffect(() => {
    if (page) {
      setIsLoadingMovies(true);
      api
        .get<IFetchMoviesResponse>(
          `?page=${
            Number.isInteger(Number(page)) ? Number(page) : 1
          }&limit=${limit}`
        )
        .then((response) => {
          if (response.data.pagination.maxPage < Number(page)) {
            push(`/movies/${response.data.pagination.maxPage}`);
          } else if (Number(page) <= 0) {
            push('/movies/1');
          }
          setIsLoadingMovies(false);
          setMovies(response.data.data);
          setPagination(response.data.pagination);
        });
    }
  }, [page, limit, push]);

  return { movies, pagination, isLoadingMovies };
}
