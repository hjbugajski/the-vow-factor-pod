import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const Section: Block = {
  slug: 'section',
  interfaceName: 'PayloadSectionBlock',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'default',
      required: true,
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Pink',
          value: 'pink',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => rootFeatures,
      }),
    },
  ],
};
