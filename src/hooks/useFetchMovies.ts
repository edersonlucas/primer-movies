import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import IFetchMoviesResponse from 'interfaces/IFetchMoviesResponse';
import IMovie from 'interfaces/IMovie';
import IPagination from 'interfaces/IPagination';
import api from 'services/api';

export default function useFetchMovies(limit = 18) {
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);
  const {
    push,
    query: { page },
    isReady
  } = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get<IFetchMoviesResponse>(
          `?page=${Number(page)}&limit=${limit}`
        );
        if (response.data.pagination.maxPage < Number(page)) {
          push(`/movies/${response.data.pagination.maxPage}`);
        } else {
          setMovies(response.data.data);
          setPagination(response.data.pagination);
          setIsLoadingMovies(false);
        }
      } catch (_err) {
        setIsLoadingMovies(true);
      }
    };

    setIsLoadingMovies(true);
    if (isReady) {
      if (!Number.isInteger(Number(page)) || Number(page) <= 0) {
        push('/movies/1');
      }
      fetchMovies();
    }
  }, [isReady, page, limit, push]);

  return { movies, pagination, isLoadingMovies };
}
