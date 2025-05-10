import type { Field } from 'payload';

import { linkGroup } from '@/payload/fields/link';

export const fields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'variant',
        type: 'select',
        interfaceName: 'PayloadButtonVariantField',
        admin: {
          width: '50%',
        },
        required: true,
        defaultValue: 'primary',
        options: [
          {
            label: 'Primary',
            value: 'primary',
          },
          {
            label: 'Secondary',
            value: 'secondary',
          },
        ],
      },
      {
        name: 'size',
        type: 'select',
        interfaceName: 'PayloadButtonSizeField',
        admin: {
          width: '50%',
        },
        required: true,
        defaultValue: 'md',
        options: [
          {
            label: 'Small',
            value: 'sm',
          },
          {
            label: 'Medium',
            value: 'md',
          },
          {
            label: 'Large',
            value: 'lg',
          },
        ],
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'icon',
        type: 'select',
        interfaceName: 'PayloadIconField',
        admin: {
          isClearable: true,
          width: '50%',
        },
        options: [
          {
            label: 'Arrow left',
            value: 'arrowLeft',
          },
          {
            label: 'Arrow right',
            value: 'arrowRight',
          },
          {
            label: 'Arrow up right',
            value: 'arrowUpRight',
          },
          {
            label: 'Calendar',
            value: 'calendar',
          },
          {
            label: 'Calendar check',
            value: 'calendarCheck',
          },
          {
            label: 'Chevron down',
            value: 'chevronDownSmall',
          },
          {
            label: 'Chevron up',
            value: 'chevronUpSmall',
          },
          {
            label: 'Chevron right',
            value: 'chevronRightSmall',
          },
          {
            label: 'Chevron left',
            value: 'chevronLeftSmall',
          },
          {
            label: 'Close',
            value: 'close',
          },
          {
            label: 'Dot',
            value: 'dot',
          },
          {
            label: 'Instagram',
            value: 'instagram',
          },
          {
            label: 'TikTok',
            value: 'tikTok',
          },
        ],
      },
      {
        name: 'iconPosition',
        type: 'select',
        interfaceName: 'PayloadButtonIconPositionField',
        admin: {
          condition: (_, siblingData) => !!siblingData?.icon,
          width: '50%',
        },
        required: true,
        defaultValue: 'none',
        options: [
          {
            label: 'None',
            value: 'none',
          },
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
          {
            label: 'Center',
            value: 'center',
          },
        ],
      },
    ],
  },
  linkGroup,
];

export const buttonLinkGroup: Field = {
  name: 'buttonLink',
  type: 'group',
  interfaceName: 'PayloadButtonLinkGroupField',
  fields,
};

export const buttonLinkArray: Field = {
  name: 'buttonLinks',
  type: 'array',
  interfaceName: 'PayloadButtonLinkArrayField',
  admin: {
    components: {
      RowLabel: {
        path: '@/payload/components/row-label.tsx',
        exportName: 'RowLabel',
        clientProps: {
          path: 'link.text',
          fallback: 'Button Link',
        },
      },
    },
  },
  fields,
};
