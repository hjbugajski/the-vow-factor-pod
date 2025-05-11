import type { ComponentProps } from 'react';

import { Icons } from '@/icons';
import { cn } from '@/utils/cn';

const baseClass =
  'h-14 w-full rounded-2xl font-medium shadow-sm shadow-pink-950/15 border-3 border-pink-900/75 bg-pink-50 px-4 text-lg text-pink-900 shadow-lg shadow-pink-950/15 duration-300 transition placeholder:text-pink-900/75 hover:border-pink-950/75 hover:bg-pink-100 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 disabled:cursor-not-allowed disabled:bg-pink-100 disabled:text-pink-200 disabled:shadow-none';

const Input = ({ className, ...props }: ComponentProps<'input'>) => (
  <input className={cn(baseClass, className)} {...props} />
);

export type InputButtonProps = ComponentProps<'button'> & {
  displayChildren?: boolean;
  icon?: ComponentProps<typeof Icons>['name'];
  placeholder?: string;
};

const InputButton = ({
  children,
  className,
  displayChildren,
  icon,
  placeholder,
  ...props
}: InputButtonProps) => (
  <button
    className={cn(
      baseClass,
      'group flex flex-row items-center',
      icon ? 'pr-3' : undefined,
      className,
    )}
    {...props}
  >
    {placeholder && !displayChildren ? (
      <span className="text-pink-900/75">{placeholder}</span>
    ) : null}
    {displayChildren ? children : null}
    <span className="grow" />
    {icon ? <Icons name={icon} size="lg" className="text-pink-900/75" /> : null}
  </button>
);

export { Input, InputButton };
