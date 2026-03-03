import type { CollectionSlug } from 'payload';

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  pages: '',
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  path: string;
};

export const generatePreviewPath = ({ collection, path }: Props) => {
  const encodedParams = new URLSearchParams({
    collection,
    path: `${collectionPrefixMap[collection]}${path}`,
  });

  return `/next/preview?${encodedParams.toString()}`;
};
