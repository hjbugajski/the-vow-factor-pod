'use client';

import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function Error({ error, retry }: ErrorProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-8 text-center md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-5xl sm:text-6xl">Something went wrong</h1>
        <p className="mx-auto max-w-2xl text-xl">
          An unexpected error occurred. Trying again may resolve it.
        </p>
        {error.digest ? (
          <p className="font-mono mt-4 text-sm text-pink-900/60">Reference: {error.digest}</p>
        ) : null}
      </div>
      <Button onClick={() => retry()}>Try again</Button>
    </section>
  );
}
