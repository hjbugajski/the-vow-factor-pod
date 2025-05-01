'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { IconMenu } from '@/icons/menu';
import { cn } from '@/utils/cn';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 isolate z-30 flex h-20 items-center p-2">
      <ul
        className={cn(
          'relative mx-auto flex h-full w-full max-w-7xl items-center gap-8 rounded-2xl border-2 border-transparent bg-pink-50 px-6 transition duration-300',
          scrolled && 'border-pink-900 shadow-lg shadow-pink-950/15',
        )}
      >
        <li className="mr-auto">
          <Link href="/" className="font-display text-lg">
            The Vow Factor Podcast
          </Link>
        </li>
        <li className="md:hidden">
          <IconMenu className="size-6" />
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium">
            About
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium">
            Resources
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium">
            Watch
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
