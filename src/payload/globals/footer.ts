import type { Field, GlobalConfig } from 'payload';

import { Role, hasRole } from '@/payload/access';
import { linkArray } from '@/payload/fields/link';
import { revalidateGlobalAfterChange } from '@/payload/hooks/revalidate-global';
import { deepMerge } from '@/payload/utils/deep-merge';

export const Footer: GlobalConfig = {
  slug: 'footer',
  typescript: {
    interface: 'PayloadFooterGlobal',
  },
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  hooks: {
    afterChange: [revalidateGlobalAfterChange],
  },
  fields: [
    {
      name: 'linkGroups',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '@/payload/components/row-label.tsx',
            exportName: 'RowLabel',
            clientProps: {
              path: 'heading',
              fallback: 'Link Group',
            },
          },
        },
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        deepMerge<Field>(linkArray, {
          minRows: 1,
          required: true,
        }),
      ],
    },
  ],
};
