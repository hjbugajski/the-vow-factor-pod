import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';
import { cva } from 'class-variance-authority';

import type { JSXConverter } from '@/components/rich-text';
import { cn } from '@/utils/cn';
import { slugify } from '@/utils/slugify';

const headingVariants = cva('first:mt-0 last:mb-0', {
  variants: {
    tag: {
      h1: 'mt-16 mb-10 text-5xl xs:text-6xl',
      h2: 'mt-12 mb-8 text-4xl xs:text-5xl',
      h3: 'mt-8 mb-4 text-3xl xs:text-4xl',
      h4: 'mt-4 mb-2 text-xl xs:text-2xl',
      h5: 'mt-4 mb-2 text-xl xs:text-2xl',
      h6: 'mt-4 mb-2 text-xl xs:text-2xl',
    },
  },
});

export const headingConverter: JSXConverter<SerializedHeadingNode> = ({
  additionalClass,
  node,
  nodesToJSX,
  overrideClass,
  parent,
}) => (
  <node.tag
    // @ts-expect-error – valid key
    id={slugify(node.children?.map((c) => c.text).join(' '))}
    className={overrideClass || cn(headingVariants({ tag: node.tag }), additionalClass)}
  >
    {nodesToJSX({ nodes: node.children, parent })}
  </node.tag>
);
