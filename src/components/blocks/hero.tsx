import { Marquee, MarqueeContent, MarqueeFade } from '@/components/ui/marquee';
import { PayloadImage } from '@/components/ui/payload-image';
import { IconTheVowFactor } from '@/icons/the-vow-factor';
import type { PayloadHeroBlock } from '@/payload/payload-types';

export function HeroBlock({ image, mobileImage }: PayloadHeroBlock) {
  if (typeof image === 'string' || typeof mobileImage === 'string') {
    return null;
  }

  return (
    <div className="relative isolate -mt-14 flex flex-col gap-8">
      <div className="relative isolate breakout-full flex h-[calc(100svh-96px)] flex-col items-center gap-16 px-4">
        <div className="absolute z-20 w-3/4 md:h-8/12">
          <IconTheVowFactor className="h-full w-full text-pink-300 drop-shadow-lg drop-shadow-pink-950/10" />
        </div>
        <div className="relative isolate h-full w-full overflow-clip rounded-2xl border-2 border-pink-900 shadow-lg shadow-pink-950/10">
          <div className="absolute inset-0 z-10 bg-pink-950/30 backdrop-blur-[1px]" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-pink-300/75 to-transparent" />
          <PayloadImage
            {...image}
            className="hidden h-full w-full object-cover object-center md:block"
          />
          <PayloadImage
            {...mobileImage}
            className="h-full w-full object-cover object-center md:hidden"
          />

          <div className="absolute inset-x-0 bottom-0 z-30">
            <div className="relative flex h-18 flex-nowrap overflow-hidden border-t-2 border-t-pink-900 bg-pink-300 whitespace-nowrap">
              <ul className="flex h-full animate-marquee-normal items-center justify-center">
                <li className="mx-12 text-xl font-medium">TikTok</li>
                <li className="mx-12 text-xl font-medium">Instagram</li>
                <li className="mx-12 text-xl font-medium">Apple Podcasts</li>
                <li className="mx-12 text-xl font-medium">YouTube</li>
              </ul>
              <ul className="flex h-full animate-marquee-normal items-center justify-center">
                <li className="mx-12 text-xl font-medium">TikTok</li>
                <li className="mx-12 text-xl font-medium">Instagram</li>
                <li className="mx-12 text-xl font-medium">Apple Podcasts</li>
                <li className="mx-12 text-xl font-medium">YouTube</li>
              </ul>
              <ul className="flex h-full animate-marquee-normal items-center justify-center">
                <li className="mx-12 text-xl font-medium">TikTok</li>
                <li className="mx-12 text-xl font-medium">Instagram</li>
                <li className="mx-12 text-xl font-medium">Apple Podcasts</li>
                <li className="mx-12 text-xl font-medium">YouTube</li>
              </ul>
              <ul className="flex h-full animate-marquee-normal items-center justify-center">
                <li className="mx-12 text-xl font-medium">TikTok</li>
                <li className="mx-12 text-xl font-medium">Instagram</li>
                <li className="mx-12 text-xl font-medium">Apple Podcasts</li>
                <li className="mx-12 text-xl font-medium">YouTube</li>
              </ul>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
