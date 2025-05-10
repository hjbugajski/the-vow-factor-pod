'use client';

import type { ComponentProps } from 'react';

import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select';

import { OverflowText } from '@/components/ui/overflow-text';
import { Icons } from '@/icons';
import { cn } from '@/utils/cn';

const Select = Root;

const SelectGroup = Group;

const SelectValue = Value;

const SelectTrigger = ({ className, children, ...props }: ComponentProps<typeof Trigger>) => (
  <Trigger
    tabIndex={0}
    className={cn(
      'inline-flex h-14 w-full items-center justify-between rounded-2xl border-3 border-pink-900/75 bg-pink-50 px-4 text-lg font-medium text-pink-900 shadow-lg shadow-pink-950/15 transition placeholder:text-pink-900/75 hover:border-pink-950 hover:bg-pink-100 focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:bg-pink-100 disabled:text-pink-200 disabled:shadow-none [&>span]:overflow-hidden [&>span]:text-left [&>span]:text-ellipsis [&>span]:whitespace-nowrap [&[data-state=open]>svg]:rotate-180',
      className,
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <Icons
        name="chevronDownSmall"
        size="lg"
        className="text-pink-900/75 transition-transform duration-200"
      />
    </Icon>
  </Trigger>
);

const SelectScrollUpButton = ({ className, ...props }: ComponentProps<typeof ScrollUpButton>) => (
  <ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <Icons name="chevronUpSmall" className="text-pink-900/75" />
  </ScrollUpButton>
);

const SelectScrollDownButton = ({
  className,
  ...props
}: ComponentProps<typeof ScrollDownButton>) => (
  <ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <Icons name="chevronDownSmall" className="text-pink-900/75" />
  </ScrollDownButton>
);

const SelectContent = ({
  className,
  children,
  position = 'popper',
  ...props
}: ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      className={cn(
        'shadow-pink/950 relative z-50 max-h-96 max-w-[95vw] overflow-hidden rounded-2xl border-3 border-pink-900/75 bg-pink-50 text-pink-900 shadow-lg transition hover:border-pink-950/75 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        position === 'popper' &&
          'w-full min-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <Viewport
        className={cn(
          'flex flex-col gap-1 p-1',
          position === 'popper' && 'h-[var(--radix-select-trigger-height)]',
        )}
      >
        {children}
      </Viewport>
    </Content>
  </Portal>
);

const SelectLabel = ({ className, ...props }: ComponentProps<typeof Label>) => (
  <Label className={cn('py-1.5 pr-2 pl-8 text-sm font-semibold', className)} {...props} />
);

const SelectItem = ({ className, children, ...props }: ComponentProps<typeof Item>) => (
  <Item
    className={cn(
      'relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl py-2 pr-3.75 pl-3 text-lg font-medium text-pink-900 outline-hidden transition duration-300 select-none hover:bg-pink-100 focus-visible:bg-pink-100 focus-visible:text-pink-950 data-disabled:pointer-events-none data-disabled:opacity-50 data-[state=checked]:bg-pink-200 data-[state=checked]:text-pink-950 data-[state=checked]:hover:bg-pink-200 data-[state=checked]:focus-visible:bg-pink-200',
      className,
    )}
    {...props}
  >
    <OverflowText>
      <ItemText>{children}</ItemText>
    </OverflowText>
    <ItemIndicator asChild>
      <Icons name="dot" className="text-dusty-rose-700 size-2 fill-current" />
    </ItemIndicator>
  </Item>
);

const SelectSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn('-mx-1 my-1 h-px bg-pink-300', className)} {...props} />
);

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
