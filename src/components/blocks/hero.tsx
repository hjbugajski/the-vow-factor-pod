'use client';

import { Marquee, MarqueeFade, MarqueeItem, MarqueeList } from '@/components/ui/marquee';
import { PayloadImage } from '@/components/ui/payload-image';
import { IconTheVowFactor } from '@/icons/the-vow-factor';
import type { PayloadHeroBlock } from '@/payload/payload-types';

export function HeroBlock({ image, mobileImage }: PayloadHeroBlock) {
  if (typeof image === 'string' || typeof mobileImage === 'string') {
    return null;
  }

  return (
    <div className="relative isolate -mt-13 breakout-full flex h-[calc(100svh-96px)] flex-col items-center gap-16 px-4">
      <div className="absolute z-20 w-3/4 md:h-8/12">
        <IconTheVowFactor className="h-full w-full text-pink-300 drop-shadow-lg drop-shadow-pink-950/25" />
      </div>
      <div className="relative isolate h-full w-full overflow-clip rounded-2xl shadow-lg shadow-pink-950/10 outline-3 outline-pink-900/75">
        <div className="absolute inset-0 z-10 bg-pink-950/30" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-pink-300/75 to-transparent" />
        <PayloadImage
          image={image}
          className="hidden h-full w-full object-cover object-center md:block"
        />
        <PayloadImage
          image={mobileImage}
          className="h-full w-full object-cover object-center md:hidden"
        />

        <Marquee className="absolute inset-x-0 bottom-0 z-30 h-18 border-t-3 border-t-pink-900/75 bg-pink-300">
          <MarqueeList className="pointer-events-none">
            <MarqueeItem className="text-xl font-medium">Apple Podcasts</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Spotify</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">YouTube</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">TikTok</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Instagram</MarqueeItem>
          </MarqueeList>
          <MarqueeList className="pointer-events-none">
            <MarqueeItem className="text-xl font-medium">Apple Podcasts</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Spotify</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">YouTube</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">TikTok</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Instagram</MarqueeItem>
          </MarqueeList>
          <MarqueeList className="pointer-events-none">
            <MarqueeItem className="text-xl font-medium">Apple Podcasts</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Spotify</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">YouTube</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">TikTok</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Instagram</MarqueeItem>
          </MarqueeList>
          <MarqueeList className="pointer-events-none">
            <MarqueeItem className="text-xl font-medium">Apple Podcasts</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Spotify</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">YouTube</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">TikTok</MarqueeItem>
            <MarqueeItem className="text-xl font-medium">Instagram</MarqueeItem>
          </MarqueeList>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
        </Marquee>
      </div>
    </div>
  );
}
