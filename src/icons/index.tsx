import type { ComponentProps, JSX } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { IconArrowLeft } from '@/icons/arrow-left';
import { IconArrowRight } from '@/icons/arrow-right';
import { IconArrowUpRight } from '@/icons/arrow-up-right';
import { IconCalendar } from '@/icons/calendar';
import { IconCalendarCheck } from '@/icons/calendar-check';
import { IconChevronDownSmall } from '@/icons/chevron-down-small';
import { IconChevronLeftSmall } from '@/icons/chevron-left-small';
import { IconChevronRightSmall } from '@/icons/chevron-right-small';
import { IconChevronUpSmall } from '@/icons/chevron-up-small';
import { IconClose } from '@/icons/close';
import { IconDot } from '@/icons/dot';
import { IconInstagram } from '@/icons/instagram';
import { IconTikTok } from '@/icons/tiktok';
import type { PayloadIconField } from '@/payload/payload-types';
import { cn } from '@/utils/cn';

type IconName = NonNullable<PayloadIconField>;

type IconFunction = (props: ComponentProps<'svg'>) => JSX.Element;

const icons: Record<IconName, IconFunction> = {
  arrowLeft: IconArrowLeft,
  arrowRight: IconArrowRight,
  arrowUpRight: IconArrowUpRight,
  calendar: IconCalendar,
  calendarCheck: IconCalendarCheck,
  chevronDownSmall: IconChevronDownSmall,
  chevronLeftSmall: IconChevronLeftSmall,
  chevronRightSmall: IconChevronRightSmall,
  chevronUpSmall: IconChevronUpSmall,
  close: IconClose,
  dot: IconDot,
  instagram: IconInstagram,
  tikTok: IconTikTok,
};

const iconVariants = cva('shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface Props extends Omit<ComponentProps<'svg'>, 'children'>, VariantProps<typeof iconVariants> {
  name: IconName;
}

export function Icons({ className, name, size, ...rest }: Props) {
  const Icon = icons[name];

  return <Icon className={cn(iconVariants({ size }), className)} {...rest} />;
}
