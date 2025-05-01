import { Marquee, MarqueeContent, MarqueeFade } from '@/components/ui/marquee';
import { PayloadImage } from '@/components/ui/payload-image';
import { IconTheVowFactor } from '@/icons/the-vow-factor';
import type { PayloadHeroBlock } from '@/payload/payload-types';

export function HeroBlock({ image, mobileImage }: PayloadHeroBlock) {
  if (typeof image === 'string' || typeof mobileImage === 'string') {
    return null;
  }

  return (
    <div className="relative isolate -mt-32 breakout-full flex h-svh items-center justify-center">
      <div className="absolute z-20 size-8/12">
        <IconTheVowFactor className="h-full w-full text-pink-300 drop-shadow-lg drop-shadow-pink-950/10" />
      </div>
      <div className="absolute inset-0 z-10 bg-pink-950/30 backdrop-blur-[1px]" />
      <PayloadImage
        {...image}
        className="hidden h-full w-full object-cover object-center md:block"
      />
      <PayloadImage
        {...mobileImage}
        className="h-full w-full object-cover object-center md:hidden"
      />
      <div className="absolute inset-x-0 bottom-0 z-30 h-18 overflow-hidden border-y border-y-pink-900 bg-pink-300 shadow-lg shadow-pink-950/10">
        <div className="flex h-full flex-nowrap overflow-hidden whitespace-nowrap">
          <ul className="flex h-full animate-marquee-normal items-center justify-center">
            <li className="mx-12 text-xl font-semibold">TikTok</li>
            <li className="mx-12 text-xl font-semibold">Instagram</li>
            <li className="mx-12 text-xl font-semibold">Apple Podcasts</li>
            <li className="mx-12 text-xl font-semibold">YouTube</li>
          </ul>
          <ul className="flex h-full animate-marquee-normal items-center justify-center">
            <li className="mx-12 text-xl font-semibold">TikTok</li>
            <li className="mx-12 text-xl font-semibold">Instagram</li>
            <li className="mx-12 text-xl font-semibold">Apple Podcasts</li>
            <li className="mx-12 text-xl font-semibold">YouTube</li>
          </ul>
          <ul className="flex h-full animate-marquee-normal items-center justify-center">
            <li className="mx-12 text-xl font-semibold">TikTok</li>
            <li className="mx-12 text-xl font-semibold">Instagram</li>
            <li className="mx-12 text-xl font-semibold">Apple Podcasts</li>
            <li className="mx-12 text-xl font-semibold">YouTube</li>
          </ul>
          <ul className="flex h-full animate-marquee-normal items-center justify-center">
            <li className="mx-12 text-xl font-semibold">TikTok</li>
            <li className="mx-12 text-xl font-semibold">Instagram</li>
            <li className="mx-12 text-xl font-semibold">Apple Podcasts</li>
            <li className="mx-12 text-xl font-semibold">YouTube</li>
          </ul>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
        </div>
      </div>
    </div>
  );
}
