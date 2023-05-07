import CarouselCard from './carouselCard';

import IMovie from 'interfaces/IMovie';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  movies: Omit<IMovie, 'year'>[];
}

export default function Carousel({ movies }: CarouselProps) {
  return (
    <section className="mt-16 flex h-64 w-full justify-center bg-white md:h-[30rem] md:justify-start">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <CarouselCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
