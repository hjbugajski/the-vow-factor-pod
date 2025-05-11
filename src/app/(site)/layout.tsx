import type { Metadata } from 'next';
import { unstable_cache } from 'next/cache';
import { DM_Sans, Fraunces } from 'next/font/google';
import type { GlobalSlug } from 'payload';
import { getPayload } from 'payload';

import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import type { PayloadFooterGlobal, PayloadNavigationGlobal } from '@/payload/payload-types';
import payloadConfig from '@/payload/payload.config';
import { cn } from '@/utils/cn';

import './globals.css';

const dmSans = DM_Sans({
  display: 'swap',
  preload: true,
  variable: '--font-dm-sans',
  weight: 'variable',
  subsets: ['latin'],
});
const fraunces = Fraunces({
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
  preload: true,
  style: 'italic',
  variable: '--font-fraunces',
  weight: 'variable',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Vow Factor',
  description: 'The Vow Factor Podcast',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-mask.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
  },
};

const fetchGlobal = async (slug: GlobalSlug) => {
  const payload = await getPayload({ config: payloadConfig });

  return payload.findGlobal({ slug });
};

const fetchCachedGlobal = <T,>(slug: GlobalSlug) =>
  unstable_cache(fetchGlobal, [slug], {
    tags: [`global_${slug}`],
  })(slug) as Promise<T>;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const navigation = await fetchCachedGlobal<PayloadNavigationGlobal>('navigation');
  const footer = await fetchCachedGlobal<PayloadFooterGlobal>('footer');

  return (
    <html
      lang="en"
      className={cn(
        'h-full scroll-p-24 scroll-smooth! bg-pink-50 text-pink-900 antialiased selection:bg-pink-300 selection:text-pink-900',
        dmSans.variable,
        fraunces.variable,
      )}
    >
      <body className="relative flex h-full flex-col">
        <Navigation {...navigation} />
        <div className="mt-20 flex grow flex-col">{children}</div>
        <Footer {...footer} />
        <Toaster />
      </body>
    </html>
  );
}
