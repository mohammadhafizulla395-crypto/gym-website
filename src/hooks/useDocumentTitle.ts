import { useEffect } from 'react';

export function useDocumentTitle(title: string, description?: string): void {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | IRONPEAK Fitness Studio`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        const prevDesc = meta.getAttribute('content');
        meta.setAttribute('content', description);
        return () => {
          document.title = prevTitle;
          if (prevDesc) meta.setAttribute('content', prevDesc);
        };
      }
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, description]);
}
