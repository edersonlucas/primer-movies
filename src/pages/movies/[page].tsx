import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Carousel from 'components/carousel';
import Footer from 'components/footer';
import Header from 'components/header';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import SkeletonCarousel from 'components/skeletonCarousel';
import SkeletonMovieCard from 'components/skeletonMovieCard';

import IMovie from 'interfaces/IMovie';
import IPagination from 'interfaces/IPagination';
import api from 'services/api';

export default function Page() {
  const router = useRouter();
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isLoadingCarousel, setIsLoadingCarousel] = useState(true);
  const [moviesHighlights, setMoviesHighlights] = useState<IMovie[] | null>(
    null
  );
  const [pagination, setPagination] = useState<IPagination | null>(null);
  const { page } = router.query;

  const skeletonCards = Array(18).fill(0);

  useEffect(() => {
    if (page) {
      setIsLoadingMovies(true);
      api
        .get(`?page=${Number.isInteger(Number(page)) ? page : 1}&limit=18`)
        .then((response) => {
          if (response.data.pagination.maxPage < Number(page)) {
            router.push(`/movies/${response.data.pagination.maxPage}`);
          }
          setIsLoadingMovies(false);
          setMovies(response.data.data as IMovie[]);
          setPagination(response.data.pagination as IPagination);
        });
    }

    api.get('?page=1&limit=3').then((response) => {
      setIsLoadingCarousel(false);
      setMoviesHighlights(response.data.data as IMovie[]);
    });
  }, [page, router]);

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <main className="m-auto w-full max-w-[1920px]">
        <Header />
        <section>
          {isLoadingCarousel && <SkeletonCarousel />}
          {moviesHighlights && <Carousel movies={moviesHighlights} />}
        </section>
        <section className="flex flex-col items-center">
          <div className="m-auto flex w-full max-w-[1200px] flex-wrap justify-center gap-5 p-2 md:p-8">
            {isLoadingMovies &&
              skeletonCards.map((index) => (
                <SkeletonMovieCard
                  key={`${index}-skeleton-card-${Math.random() * 1}`}
                />
              ))}
            {movies &&
              movies.map((movie) => (
                <MovieCard
                  key={movie.title}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  image_url={movie.image_url}
                  crew={movie.crew}
                />
              ))}
          </div>
          {movies && pagination && <Pagination pagination={pagination} />}
        </section>
        <Footer />
      </main>
    </>
  );
}
