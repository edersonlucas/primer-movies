import Head from 'next/head';

import Carousel from 'components/carousel';
import Footer from 'components/footer';
import Header from 'components/header';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import SkeletonCarousel from 'components/skeletonCarousel';
import SkeletonMovieCard from 'components/skeletonMovieCard';

import useFetchMovies from 'hooks/useFetchMovies';
import useFetchMoviesHighlights from 'hooks/useFetchMoviesHighlights';

export default function Page() {
  const { movies, pagination, isLoadingMovies } = useFetchMovies();

  const { moviesHighlights, isLoadingCarousel } = useFetchMoviesHighlights();

  const skeletonCards = Array(18).fill(0);

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
              skeletonCards.map((_item, index) => (
                <SkeletonMovieCard key={`${index}-skeleton-card`} />
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
