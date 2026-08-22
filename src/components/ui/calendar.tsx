'use client';

import type { ComponentProps } from 'react';

import { DayPicker } from 'react-day-picker';

import { Icons } from '@/icons';
import { cn } from '@/utils/cn';

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: ComponentProps<typeof DayPicker>) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn('px-2 py-3', className)}
    // prettier-ignore
    classNames={{
      months: 'relative flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      month_caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-sm font-semibold',
      nav: 'absolute inset-x-1 top-0 z-10 flex h-6 items-center justify-between',
      button_previous: 'size-8 bg-transparent p-0 inline-flex transition items-center justify-center rounded-lg text-pink-900 hover:bg-pink-100 focus-visible:bg-pink-100 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-pink-900/75',
      button_next: 'size-8 bg-transparent p-0 inline-flex transition items-center justify-center rounded-lg text-pink-900 hover:bg-pink-100 focus-visible:bg-pink-100 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-pink-900/75',
      month_grid: 'w-full border-collapse space-y-1',
      weekdays: 'flex',
      weekday: 'text-pink-900 rounded-lg w-9 font-semibold text-sm',
      week: 'flex w-full mt-2',
      day: 'size-9 text-center text-sm p-0 relative font-medium rounded-lg focus-within:relative focus-within:z-20 [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:hover:bg-pink-200 [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:hover:text-pink-950 [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:hover:rounded-lg transition',
      day_button: 'size-9 inline-flex items-center justify-center rounded-[inherit] bg-transparent p-0 font-medium focus:ring-3 focus:ring-pink-900/75 focus:outline-hidden',
      range_start: 'day-range-start rounded-l-lg! rounded-r-none bg-pink-200 text-pink-950 hover:bg-pink-300 transition',
      range_end: 'day-range-end rounded-r-lg! rounded-l-none bg-pink-200 text-pink-950 hover:bg-pink-300 transition',
      selected: 'font-semibold! [&:not(.day-range-start,.day-range-middle,.day-range-end)]:rounded-lg day-selected [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:rounded-lg [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:bg-pink-200 [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:text-pink-950 [&:not(.day-disabled,.day-range-start,.day-range-end,.day-range-middle)]:hover:bg-pink-300 transition',
      outside: 'day-outside font-normal! text-pink-900/50 aria-selected:bg-pink-100 aria-selected:text-pink-950 [&.day-range-start]:bg-pink-200 [&.day-range-start]:text-pink-950 [&.day-range-start]:hover:bg-pink-300 [&.day-range-end]:bg-pink-200 [&.day-range-end]:text-pink-950 [&.day-range-end]:hover:bg-pink-300 transition',
      disabled: 'day-disabled font-normal! text-pink-900/50',
      range_middle: 'day-range-middle rounded-none! aria-selected:bg-pink-100 aria-selected:hover:bg-pink-200 aria-selected:text-pink-950 aria-selected:font-semibold',
      hidden: 'invisible',
      ...classNames,
    }}
    components={{
      Chevron: ({ orientation }) => (
        <Icons name={orientation === 'left' ? 'chevronLeftSmall' : 'chevronRightSmall'} />
      ),
    }}
    {...props}
  />
);

export { Calendar };
