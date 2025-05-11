import type { Block, Field } from 'payload';

import { linkArray } from '@/payload/fields/link';
import { deepMerge } from '@/payload/utils/deep-merge';

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'PayloadHeroBlock',
  fields: [
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'images',
      required: true,
    },
    {
      name: 'mobileImage',
      type: 'relationship',
      relationTo: 'images',
      required: true,
    },
    deepMerge<Field>(linkArray, { required: true }),
  ],
};
