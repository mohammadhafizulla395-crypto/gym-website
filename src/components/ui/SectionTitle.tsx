import { type ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, centered = true, light = false, children }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          light ? 'text-gray-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-gray-600' : 'text-gray-400'
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
