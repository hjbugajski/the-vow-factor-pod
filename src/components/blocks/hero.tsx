'use client';

import { useState } from 'react';

import { MarqueeFade, MarqueeItem, MarqueeList } from '@/components/ui/marquee';
import { PayloadImage } from '@/components/ui/payload-image';
import { PayloadLink } from '@/components/ui/payload-link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { IconTheVowFactor } from '@/icons/the-vow-factor';
import type { PayloadHeroBlock, PayloadLinkArrayField } from '@/payload/payload-types';

export function HeroBlock({ image, links, mobileImage }: PayloadHeroBlock) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  if (typeof image === 'string' || typeof mobileImage === 'string') {
    return null;
  }

  const marqueeItems = new Array(5).fill(links) as PayloadLinkArrayField[];

  return (
    <div className="relative isolate breakout-full flex h-[calc(100svh-96px)] flex-col items-center gap-16 px-4">
      <div className="absolute z-50 w-3/4 md:h-8/12">
        <IconTheVowFactor className="h-full w-full text-pink-300 drop-shadow-lg drop-shadow-pink-950/25" />
      </div>
      <div className="relative isolate h-full w-full rounded-2xl shadow-lg shadow-pink-950/10 outline-3 outline-pink-900/75">
        <div className="absolute inset-0 z-10 rounded-2xl bg-pink-950/30" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 rounded-2xl bg-gradient-to-t from-pink-300/75 to-transparent" />
        <PayloadImage
          image={image}
          className="hidden h-full w-full rounded-2xl object-cover object-center md:block"
        />
        <PayloadImage
          image={mobileImage}
          className="h-full w-full rounded-2xl object-cover object-center md:hidden"
        />
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger
            aria-label="The Vow Factor Podcast links"
            className="group absolute inset-x-0 bottom-0 z-30 flex h-18 flex-nowrap overflow-clip rounded-b-2xl border-t-3 border-t-pink-900/75 bg-pink-300 whitespace-nowrap transition duration-300 focus:outline-none focus-visible:border-t-pink-300 focus-visible:ring-3 focus-visible:ring-pink-900/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-50 motion-safe:overflow-x-hidden"
          >
            {marqueeItems?.map((marqueeItem, i) => (
              <MarqueeList
                key={i}
                data-popover-open={popoverOpen}
                aria-hidden
                className="flex h-full flex-row items-center justify-center data-[popover-open=true]:[animation-play-state:paused]"
              >
                {marqueeItem?.map((item, j) => (
                  <MarqueeItem
                    key={j}
                    className="text-xl font-medium decoration-dotted decoration-4 underline-offset-6 hover:cursor-pointer hover:underline"
                  >
                    {item.text}
                  </MarqueeItem>
                ))}
              </MarqueeList>
            ))}
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </PopoverTrigger>
          <PopoverContent className="py-2">
            <ul className="w-full">
              {links?.map((link) => (
                <li key={link.id} className="py-2">
                  <PayloadLink link={link} className="text-2xl font-medium" />
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
