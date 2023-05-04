import Image from 'next/image';
import Link from 'next/link';

import Rating from './rating';

interface CarouselCardProps {
  movie: {
    title: string;
    image_url: string;
    rating: string;
    crew: string;
  };
}

export default function CarouselCard({ movie }: CarouselCardProps) {
  return (
    <>
      <div className="absolute z-40 flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-center text-white md:ml-44 md:items-start md:p-5 md:text-start">
        <h2 className="text-xs font-bold md:text-base">Destaque do mês</h2>
        <Link target="_blank" href="http://github.com/edersonlucas">
          <h3 className="w-full max-w-xl text-lg font-bold md:text-3xl">
            {movie.title}
          </h3>
        </Link>
        <div className="flex flex-col-reverse items-center gap-3 md:flex-row">
          <Rating rating={movie.rating} />
          <p className="text-xs font-semibold md:text-base">{movie.crew}</p>
        </div>
      </div>
      <div className="absolute z-30 h-full w-full bg-[#000000] opacity-60"></div>
      <Image
        priority={true}
        className="object-cover"
        fill
        alt={`Imagem da capa do filme ${movie.title}`}
        src={movie.image_url}
      />
    </>
  );
}
