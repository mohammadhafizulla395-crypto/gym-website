import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  program: string;
  date: string;
}

export function ReviewCard({ name, avatar, rating, review, program, date }: ReviewCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-red-400 text-sm">{program}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">"{review}"</p>

      <p className="text-gray-600 text-xs">{date}</p>
    </div>
  );
}
