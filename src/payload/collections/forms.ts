import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { revalidateTag } from 'next/cache';
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
} from 'payload';

import { Role, hasRole } from '@/payload/access';
import { Date } from '@/payload/blocks/form-fields/date';
import { Email } from '@/payload/blocks/form-fields/email';
import { PhoneNumber } from '@/payload/blocks/form-fields/phone-number';
import { Radio } from '@/payload/blocks/form-fields/radio';
import { Select } from '@/payload/blocks/form-fields/select';
import { Text } from '@/payload/blocks/form-fields/text';
import { Textarea } from '@/payload/blocks/form-fields/textarea';
import type { PayloadFormsCollection } from '@/payload/payload-types';

/**
 * Form documents are populated into cached page entries, so a change here has to expire the page
 * cache as well as the collection itself.
 */
const revalidatePages: CollectionAfterChangeHook<PayloadFormsCollection> = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating pages after form change: ${doc.id}`);
  revalidateTag('pages', { expire: 0 });

  return doc;
};

const revalidatePagesAfterDelete: CollectionAfterDeleteHook<PayloadFormsCollection> = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating pages after form delete: ${doc.id}`);
  revalidateTag('pages', { expire: 0 });

  return doc;
};

export const Forms: CollectionConfig<'forms'> = {
  slug: 'forms',
  typescript: {
    interface: 'PayloadFormsCollection',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'fields', 'createdAt', 'updatedAt'],
    group: 'CRM',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: hasRole(Role.Admin, Role.Editor),
    update: hasRole(Role.Admin, Role.Editor),
    delete: hasRole(Role.Admin),
  },
  hooks: {
    afterChange: [revalidatePages],
    afterDelete: [revalidatePagesAfterDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => rootFeatures,
      }),
    },
    {
      name: 'submitButtonLabel',
      type: 'text',
      required: true,
      defaultValue: 'Submit',
    },
    {
      name: 'confirmationMessage',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fields',
      type: 'blocks',
      required: true,
      minRows: 1,
      blocks: [Date, Email, PhoneNumber, Radio, Select, Text, Textarea],
    },
  ],
};
