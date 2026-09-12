import { ArrowRight, Calendar, Target, TrendingUp } from 'lucide-react';
import { Button } from './Button';

interface TransformationCardProps {
  name: string;
  age: number;
  goal: string;
  duration: string;
  weightLost: string;
  muscleGained: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  onViewStory: () => void;
}

export function TransformationCard({
  name,
  age,
  goal,
  duration,
  weightLost,
  muscleGained,
  beforeImage,
  afterImage,
  story,
  onViewStory,
}: TransformationCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 card-hover">
      <div className="grid grid-cols-2 gap-1 relative">
        <div className="relative h-56">
          <img src={beforeImage} alt={`${name} before`} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
            BEFORE
          </div>
        </div>
        <div className="relative h-56">
          <img src={afterImage} alt={`${name} after`} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
            AFTER
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">
            {name}'s <span className="text-red-500">Transformation</span>
          </h3>
          <span className="text-gray-400 text-sm">Age {age}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 bg-[#242424] rounded-lg">
            <Target size={16} className="mx-auto text-red-500 mb-1" />
            <p className="text-white text-sm font-semibold">{weightLost}</p>
            <p className="text-gray-500 text-xs">Lost</p>
          </div>
          <div className="text-center p-2 bg-[#242424] rounded-lg">
            <TrendingUp size={16} className="mx-auto text-green-500 mb-1" />
            <p className="text-white text-sm font-semibold">{muscleGained}</p>
            <p className="text-gray-500 text-xs">Gained</p>
          </div>
          <div className="text-center p-2 bg-[#242424] rounded-lg">
            <Calendar size={16} className="mx-auto text-orange-500 mb-1" />
            <p className="text-white text-sm font-semibold">{duration}</p>
            <p className="text-gray-500 text-xs">Duration</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story}</p>

        <Button variant="outline" fullWidth size="sm" onClick={onViewStory}>
          Read Full Story
        </Button>
      </div>
    </div>
  );
}
