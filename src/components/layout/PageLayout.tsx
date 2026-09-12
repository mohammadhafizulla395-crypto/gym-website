import { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function PageLayout({ children, title, description, className }: PageLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title} | IRONPEAK Fitness Studio</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <main className={`min-h-screen pt-20 ${className || ''}`}>
        {children}
      </main>
    </>
  );
}
