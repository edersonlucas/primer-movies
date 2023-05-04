import Image from 'next/image';
import Link from 'next/link';

import Rating from './rating';

import IMovie from 'interfaces/IMovie';

type MovieCardProps = IMovie;

export default function MovieCard({
  title,
  image_url,
  rating,
  year,
  crew
}: MovieCardProps) {
  return (
    <Link
      target="_blank"
      href="http://github.com/edersonlucas"
      className="film-card flex max-w-[155px] border-spacing-9 flex-col justify-between rounded-2xl border border-gray p-2 hover:bg-secondary hover:text-white md:max-w-[170px]"
    >
      <Image
        className="rounded-2xl"
        priority={true}
        width={150}
        height={300}
        src={image_url}
        alt={`Imagem da capa do filme ${title}`}
      />
      <div className="mt-2 flex flex-col gap-2">
        <h2 className="text-sm font-bold">{title}</h2>
        <h3 className="text-[0.69rem] font-medium">
          Ano de lançamento: {year}
        </h3>
        <p className="text-[0.69rem] text-xs">{crew}</p>
      </div>
      <div className="mt-2 text-white">
        <Rating rating={rating} />
      </div>
    </Link>
  );
}
