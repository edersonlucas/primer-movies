import { Star } from 'phosphor-react';

interface RatingProps {
  rating: string;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <span className="flex max-w-[5rem] items-center gap-1 rounded-full bg-primary px-3 py-1 opacity-90">
      <Star size={15} weight="fill" />
      <p className="text-xs font-semibold">{rating}/10</p>
    </span>
  );
}
