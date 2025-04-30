import type { Metadata } from 'next';
import { Baskervville, DM_Sans, Fraunces } from 'next/font/google';

import { cn } from '@/utils/cn';

import './globals.css';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-baskervville',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'The Vow Factor Pod',
  description: 'The Vow Factor Podcast',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-pink-50 text-pink-900 antialiased',
        baskervville.variable,
        dmSans.variable,
        fraunces.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
