import { cn } from '../../utils/helpers';
import { Button } from './Button';
import { Award, Clock, Star } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  shortBio: string;
  availability: string;
  onBook: () => void;
}

export function TrainerCard({
  name,
  specialty,
  experience,
  image,
  shortBio,
  availability,
  onBook,
}: TrainerCardProps) {
  return (
    <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 card-hover">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-red-400 text-sm font-medium">{specialty}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock size={14} />
            <span>{experience}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Award size={14} />
            <span>Certified</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{shortBio}</p>

        <p className="text-gray-500 text-xs mb-4">{availability}</p>

        <Button variant="primary" fullWidth size="sm" onClick={onBook}>
          Book With Trainer
        </Button>
      </div>
    </div>
  );
}
