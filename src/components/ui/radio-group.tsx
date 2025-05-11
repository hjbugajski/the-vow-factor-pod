'use client';

import type { ComponentProps } from 'react';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';

import { Icons } from '@/icons';
import { cn } from '@/utils/cn';

const RadioGroup = ({ className, ...props }: ComponentProps<typeof Root>) => (
  <Root className={cn('flex flex-col gap-2', className)} {...props} />
);

const RadioGroupItem = ({ className, ...props }: ComponentProps<typeof Item>) => (
  <Item
    className={cn(
      'my-1 aspect-square size-5 rounded-full border-2 border-pink-900/75 text-pink-900 shadow-sm shadow-black/10 transition duration-300 hover:border-pink-950/75 hover:bg-pink-100 focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state="checked"]:border-pink-900/75',
      className,
    )}
    {...props}
  >
    <Indicator className="flex items-center justify-center">
      <Icons name="dot" className="size-3 fill-current text-current" />
    </Indicator>
  </Item>
);

export { RadioGroup, RadioGroupItem };
