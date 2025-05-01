import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';

import { Navigation } from '@/components/navigation';
import { cn } from '@/utils/cn';

import './globals.css';

const dmSans = DM_Sans({
  display: 'swap',
  preload: true,
  variable: '--font-dm-sans',
  weight: 'variable',
});
const fraunces = Fraunces({
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
  preload: true,
  style: 'italic',
  variable: '--font-fraunces',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'The Vow Factor Pod',
  description: 'The Vow Factor Podcast',
};

export const viewport: Viewport = {
  themeColor: '#22161b',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full bg-pink-50 text-pink-900 antialiased',
        dmSans.variable,
        fraunces.variable,
      )}
    >
      <body className="relative flex h-full flex-col">
        <Navigation />
        <div className="mt-20 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
