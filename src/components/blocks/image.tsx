import { cva } from 'class-variance-authority';

import { PayloadImage } from '@/components/ui/payload-image';
import { PayloadLink } from '@/components/ui/payload-link';
import type { PayloadImageBlock } from '@/payload/payload-types';

const imageVariants = cva('rounded-xl shadow-lg shadow-pink-950/15 outline-3 outline-pink-900/75', {
  variants: {
    width: {
      '6/12': 'w-full md-lg:w-6/12',
      '7/12': 'w-full md-lg:w-7/12',
      '8/12': 'w-full md-lg:w-8/12',
      '9/12': 'w-full md-lg:w-9/12',
      '10/12': 'w-full md-lg:w-10/12',
      '11/12': 'w-full md-lg:w-11/12',
      full: 'w-full',
    },
  },
});

export function ImageBlock({ image, name, socialLink, variant, width }: PayloadImageBlock) {
  if (typeof image === 'string') {
    return null;
  }

  return (
    <figure className="mt-12 mb-8 flex flex-col items-center justify-center gap-4 first:mt-0 last:mb-0">
      <PayloadImage image={image} className={imageVariants({ width })} />
      {variant === 'bioCard' ? (
        <figcaption className="flex flex-col">
          <span className="text-center font-display text-2xl text-pink-900 md:text-3xl">
            {name}
          </span>
          {socialLink ? (
            <PayloadLink
              link={socialLink}
              className="text-center font-semibold text-pink-800 md:text-lg"
            />
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
