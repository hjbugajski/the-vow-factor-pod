import type { Block } from 'payload';

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
  ],
};
