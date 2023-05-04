import CarouselCard from './carouselCard';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  movies: Array<{
    title: string;
    image_url: string;
    rating: string;
    crew: string;
  }>;
}

export default function Carousel({ movies }: CarouselProps) {
  return (
    <section className="flex h-64 w-full justify-center bg-white md:h-[30rem] md:justify-start">
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
