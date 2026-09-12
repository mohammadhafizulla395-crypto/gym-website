import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  to?: string;
}

export function Card({ children, className, hover = true, onClick, to }: CardProps) {
  const baseClasses = cn(
    'bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300',
    hover && 'hover:border-gray-700 card-hover',
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
}
