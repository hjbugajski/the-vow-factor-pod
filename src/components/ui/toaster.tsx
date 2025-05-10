'use client';

import type { ComponentProps } from 'react';

import { Toaster as Sonner } from 'sonner';

import { IconAlertTriangle } from '@/icons/alert-triangle';
import { IconCircleCheck } from '@/icons/circle-check';

type ToasterProps = ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    theme="light"
    icons={{
      error: <IconAlertTriangle className="size-4 text-pink-900" />,
      success: <IconCircleCheck className="size-4 text-pink-900" />,
    }}
    toastOptions={{
      classNames: {
        description: '',
        toast:
          'bg-pink-300! text-sm! text-pink-900! font-semibold! text-pink-900! border-3! border-pink-900/75! shadow-lg! shadow-pink/15! rounded-2xl!',
      },
    }}
    {...props}
  />
);

export { Toaster };
