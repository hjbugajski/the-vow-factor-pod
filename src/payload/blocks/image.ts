import type { Block, Field } from 'payload';

import { linkGroup } from '@/payload/fields/link';
import { deepMerge } from '@/payload/utils/deep-merge';

export const Image: Block = {
  slug: 'image',
  interfaceName: 'PayloadImageBlock',
  fields: [
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'images',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          type: 'select',
          admin: {
            width: '50%',
          },
          required: true,
          defaultValue: 'standalone',
          options: [
            {
              label: 'Standalone',
              value: 'standalone',
            },
            {
              label: 'Biography Card',
              value: 'bioCard',
            },
          ],
        },
        {
          name: 'width',
          type: 'select',
          admin: {
            width: '50%',
          },
          required: true,
          defaultValue: 'full',
          options: [
            {
              label: '6/12 (half)',
              value: '6/12',
            },
            {
              label: '7/12',
              value: '7/12',
            },
            {
              label: '8/12',
              value: '8/12',
            },
            {
              label: '9/12 (three-quarters)',
              value: '9/12',
            },
            {
              label: '10/12',
              value: '10/12',
            },
            {
              label: '11/12',
              value: '11/12',
            },
            {
              label: 'Full',
              value: 'full',
            },
          ],
        },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'bioCard',
      },
    },
    deepMerge<Field>(linkGroup, {
      name: 'socialLink',
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'bioCard',
      },
    }),
  ],
};
