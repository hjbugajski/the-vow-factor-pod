import type { ComponentProps } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex w-fit items-center justify-center rounded-xl font-semibold transition duration-300 hover:no-underline focus:outline-none focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 disabled:cursor-not-allowed disabled:bg-pink-100 disabled:text-pink-200 disabled:shadow-none',
  {
    variants: {
      variant: {
        primary:
          'bg-pink-900 text-pink-300 shadow-lg shadow-pink-950/15 hover:not-disabled:bg-pink-950',
        secondary:
          'bg-pink-300 text-pink-900 shadow-lg shadow-pink-950/15 hover:not-disabled:bg-pink-400',
        icon: 'bg-pink-50 text-pink-900 hover:not-disabled:bg-pink-100',
      },
      size: {
        sm: 'h-10 gap-1.5 px-4 text-base',
        md: 'h-12 gap-2 px-6 text-lg',
        lg: 'h-14 gap-2.5 px-8 text-xl',
      },
      iconPosition: {
        left: 'flex-row-reverse',
        right: 'flex-row',
      },
    },
    compoundVariants: [
      {
        variant: 'icon',
        size: 'sm',
        className: 'size-10 p-0',
      },
      {
        variant: 'icon',
        size: 'md',
        className: 'size-12 p-0',
      },
      {
        variant: 'icon',
        size: 'lg',
        className: 'size-14 p-0',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ asChild, className, iconPosition, size, variant, ...props }: Props) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={cn(buttonVariants({ iconPosition, size, variant }), className)}
    />
  );
}
