import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';
import Link from 'next/link';

import type { JSXConverter } from '@/components/rich-text';
import type { PayloadLinkGroupField } from '@/payload/payload-types';
import { cn } from '@/utils/cn';
import { linkProps } from '@/utils/link';

export const linkConverter: JSXConverter<SerializedLinkNode> = ({
  additionalClass,
  node,
  nodesToJSX,
  overrideClass,
  parent,
}) => (
  <Link
    {...linkProps(node.fields as unknown as PayloadLinkGroupField)}
    className={
      overrideClass ||
      cn('underline decoration-dotted decoration-4 underline-offset-6', additionalClass)
    }
  >
    {nodesToJSX({ nodes: node.children, parent })}
  </Link>
);
