import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block, Field } from 'payload';

import { Image } from '@/payload/blocks/image';
import { deepMerge } from '@/payload/utils/deep-merge';

const richTextField: Field = {
  name: 'content',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: [Image] })],
  }),
};

export const Columns: Block = {
  slug: 'columns',
  interfaceName: 'PayloadColumnsBlock',
  labels: {
    singular: 'Columns',
    plural: 'Columns',
  },
  fields: [
    deepMerge<Field>(richTextField, { name: 'contentColumnOne' }),
    deepMerge<Field>(richTextField, { name: 'contentColumnTwo' }),
  ],
};
