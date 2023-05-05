import { useEffect, useState } from 'react';

import IFetchMoviesResponse from 'interfaces/IFetchMoviesResponse';
import IMovie from 'interfaces/IMovie';
import api from 'services/api';

export default function useFetchMoviesHighlights(limit = 3) {
  const [isLoadingCarousel, setIsLoadingCarousel] = useState(false);
  const [moviesHighlights, setMoviesHighlights] = useState<IMovie[] | null>(
    null
  );

  useEffect(() => {
    api.get<IFetchMoviesResponse>(`?page=1&limit=${limit}`).then((response) => {
      setIsLoadingCarousel(false);
      setMoviesHighlights(response.data.data);
    });
  }, [limit]);

  return { isLoadingCarousel, moviesHighlights };
}
