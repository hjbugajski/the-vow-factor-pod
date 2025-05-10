import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const Textarea = ({ className, ...props }: ComponentProps<'textarea'>) => (
  <textarea
    className={cn(
      'w-full rounded-2xl border-3 border-pink-900/75 bg-pink-50 p-4 text-lg font-medium text-pink-900 shadow-lg shadow-pink-950/15 transition placeholder:text-pink-900/75 hover:border-pink-950 hover:bg-pink-100 focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 focus-visible:outline-hidden',
      className,
    )}
    rows={4}
    {...props}
  />
);

export { Textarea };
