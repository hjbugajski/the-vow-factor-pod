import type { ComponentProps } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

// ----- Marquee ----- //
export function Marquee({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      tabIndex={-1}
      className={cn(
        'group flex flex-nowrap whitespace-nowrap motion-safe:overflow-x-hidden',
        className,
      )}
      {...props}
    />
  );
}

// ----- Marquee List ----- //
const marqueeListVariants = cva(
  'flex items-center not-motion-safe:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]',
  {
    variants: {
      speed: {
        slow: 'animate-marquee-slow',
        normal: 'animate-marquee-normal',
        fast: 'animate-marquee-fast',
      },
    },
    defaultVariants: {
      speed: 'normal',
    },
  },
);

export type MarqueeListProps = ComponentProps<'ul'> &
  VariantProps<typeof marqueeListVariants> & {
    duplicate?: boolean;
  };

export function MarqueeList({ className, duplicate = false, speed, ...props }: MarqueeListProps) {
  return (
    <ul
      {...props}
      aria-hidden={duplicate}
      className={cn(marqueeListVariants({ speed }), className)}
    />
  );
}

// ----- Marquee Item ----- //
export function MarqueeItem({ className, ...props }: ComponentProps<'li'>) {
  return <li {...props} className={cn('mx-6 md:mx-12', className)} />;
}

// ----- Marquee Fade ----- //
const marqueeFadeVariants = cva(
  'pointer-events-none absolute inset-y-0 w-1/6 from-pink-300 md:w-1/5',
  {
    variants: {
      side: {
        left: 'left-0 bg-linear-to-r',
        right: 'right-0 bg-linear-to-l',
      },
    },
  },
);

export type MarqueeFadeProps = ComponentProps<'div'> & VariantProps<typeof marqueeFadeVariants>;

export function MarqueeFade({ className, side, ...props }: MarqueeFadeProps) {
  return <div {...props} className={cn(marqueeFadeVariants({ side }), className)} />;
}
