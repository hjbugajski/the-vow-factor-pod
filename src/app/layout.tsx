import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'The Vow Factor Pod',
  description: 'The Vow Factor Podcast',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
