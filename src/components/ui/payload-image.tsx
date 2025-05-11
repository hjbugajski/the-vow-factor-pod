import Image from 'next/image';

import type { PayloadImagesCollection } from '@/payload/payload-types';

export type PayloadImageProps = {
  className?: string;
  image: PayloadImagesCollection;
};

export function PayloadImage({ className, image }: PayloadImageProps) {
  const {
    alt,
    dataUrl,
    displayOriginal,
    height: propsHeight,
    sizes,
    title,
    url,
    width: propsWidth,
  } = image;
  const src = displayOriginal ? url : sizes?.preview?.url || url;
  const width = displayOriginal ? propsWidth : sizes?.preview?.width || propsWidth;
  const height = displayOriginal ? propsHeight : sizes?.preview?.height || propsHeight;

  if (!src || !width || !height) {
    return null;
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={dataUrl ?? undefined}
      alt={alt || title}
      className={className}
    />
  );
}
