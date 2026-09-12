import { useState } from 'react';
import { cn, formatPrice } from '../../utils/helpers';
import { Check } from 'lucide-react';
import { Button } from './Button';
import type { DurationOption } from '../../data/plans';

interface PricingCardProps {
  name: string;
  durations: DurationOption[];
  features: string[];
  popular: boolean;
  description: string;
  onSelect: (data: { planName: string; duration: string; price: number; months: number }) => void;
}

export function PricingCard({
  name,
  durations,
  features,
  popular,
  description,
  onSelect,
}: PricingCardProps) {
  const [selectedDuration, setSelectedDuration] = useState<DurationOption>(durations[0]);

  const monthlyPrice = Math.round(selectedDuration.price / selectedDuration.months);

  return (
    <div
      className={cn(
        'relative rounded-2xl p-8 transition-all duration-300',
        popular
          ? 'bg-gradient-to-b from-red-600/20 to-[#1a1a1a] border-2 border-red-600 scale-105 shadow-2xl shadow-red-600/20'
          : 'bg-[#1a1a1a] border border-gray-800 hover:border-gray-700'
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Duration Selector */}
      <div className="flex gap-2 mb-6">
        {durations.map((d) => (
          <button
            key={d.months}
            onClick={() => setSelectedDuration(d)}
            className={cn(
              'flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer border',
              selectedDuration.months === d.months
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-[#242424] text-gray-400 border-gray-700 hover:border-gray-600 hover:text-white'
            )}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="text-center mb-2">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">{formatPrice(selectedDuration.price)}</span>
          <span className="text-gray-400">/ {selectedDuration.label}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          {formatPrice(monthlyPrice)} per month
        </p>
      </div>

      {/* Savings Badge */}
      {selectedDuration.savings && (
        <div className="text-center mb-6">
          <span className="inline-block bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20">
            {selectedDuration.savings}
          </span>
        </div>
      )}
      {!selectedDuration.savings && <div className="mb-6" />}

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={18}
              className={cn(
                'mt-0.5 flex-shrink-0',
                popular ? 'text-red-500' : 'text-green-500'
              )}
            />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'primary' : 'outline'}
        fullWidth
        onClick={() =>
          onSelect({
            planName: name,
            duration: selectedDuration.label,
            price: selectedDuration.price,
            months: selectedDuration.months,
          })
        }
      >
        Join Now
      </Button>
    </div>
  );
}
