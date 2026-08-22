import { revalidateTag } from 'next/cache';
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
  Field,
} from 'payload';

import { Role, hasRole } from '@/payload/access';
import { linkGroup } from '@/payload/fields/link';
import type { PayloadImagesCollection } from '@/payload/payload-types';
import { createDataUrl } from '@/payload/utils/create-data-url';
import { deepMerge } from '@/payload/utils/deep-merge';

const addDataUrl: CollectionAfterChangeHook<PayloadImagesCollection> = async ({
  context,
  doc,
  req,
}) => {
  if (!req.file?.data || context?.ignoreAddDataUrl) {
    return doc;
  }

  const dataUrl = await createDataUrl(req.file.data, doc.mimeType);

  if (!dataUrl) {
    return doc;
  }

  return req.payload.update({
    collection: 'images',
    id: doc.id,
    data: { dataUrl },
    context: { ignoreAddDataUrl: true },
    req: {
      transactionID: req.transactionID,
      user: req.user,
    },
  });
};

/**
 * Image documents are populated into cached page entries, so a change here has to expire the page
 * cache as well as the collection itself.
 */
const revalidatePages: CollectionAfterChangeHook<PayloadImagesCollection> = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating pages after image change: ${doc.id}`);
  revalidateTag('pages', { expire: 0 });

  return doc;
};

const revalidatePagesAfterDelete: CollectionAfterDeleteHook<PayloadImagesCollection> = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating pages after image delete: ${doc.id}`);
  revalidateTag('pages', { expire: 0 });

  return doc;
};

export const Images: CollectionConfig<'images'> = {
  slug: 'images',
  typescript: {
    interface: 'PayloadImagesCollection',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['filename', 'mimeType', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: hasRole(Role.Admin, Role.Editor),
    update: hasRole(Role.Admin, Role.Editor),
    delete: hasRole(Role.Admin),
  },
  hooks: {
    afterChange: [addDataUrl, revalidatePages],
    afterDelete: [revalidatePagesAfterDelete],
  },
  upload: {
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
      },
      {
        name: 'preview',
        height: 1080,
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Used as display when selecting an image',
      },
    },
    {
      name: 'alt',
      label: 'Description',
      type: 'textarea',
      admin: {
        description: 'Used for accessibility and SEO',
      },
    },
    deepMerge<Field>(linkGroup, {
      admin: {
        condition: (_, siblingData) => !!siblingData?.hasLink,
      },
    }),
    {
      name: 'dataUrl',
      label: 'Data URL',
      type: 'text',
      maxLength: 1_000_000,
      admin: {
        position: 'sidebar',
        readOnly: true,
        condition: (data) => !!data?.dataUrl,
      },
    },
    {
      type: 'row',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'hasLink',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'displayOriginal',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
};
