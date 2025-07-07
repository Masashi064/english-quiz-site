'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtag';

function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}

export default RouteChangeTracker; 