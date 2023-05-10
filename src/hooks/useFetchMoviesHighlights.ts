import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import IFetchMoviesResponse from 'interfaces/IFetchMoviesResponse';
import IMovie from 'interfaces/IMovie';
import api from 'services/api';

export default function useFetchMoviesHighlights(limit = 3) {
  const [isLoadingCarousel, setIsLoadingCarousel] = useState(true);
  const [moviesHighlights, setMoviesHighlights] = useState<IMovie[] | null>(
    null
  );

  const { isReady } = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get<IFetchMoviesResponse>(
          `?page=1&limit=${limit}`
        );
        setMoviesHighlights(response.data.data);
        setIsLoadingCarousel(false);
      } catch (_err) {
        setIsLoadingCarousel(true);
      }
    };

    setIsLoadingCarousel(true);

    if (isReady) {
      fetchMovies();
    }
  }, [limit, isReady]);

  return { isLoadingCarousel, moviesHighlights };
}
