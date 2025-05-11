import type { Block } from 'payload';

import { linkArray } from '@/payload/fields/link';

export const Links: Block = {
  slug: 'links',
  interfaceName: 'PayloadLinksBlock',
  labels: {
    singular: 'Links',
    plural: 'Links',
  },
  fields: [linkArray],
};
