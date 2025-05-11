import type { SerializedHorizontalRuleNode } from '@payloadcms/richtext-lexical';

import type { JSXConverter } from '@/components/rich-text';
import { cn } from '@/utils/cn';

export const horizontalRuleConverter: JSXConverter<SerializedHorizontalRuleNode> = ({
  additionalClass,
  overrideClass,
}) => (
  <hr
    className={
      overrideClass ||
      cn('my-16 border-t-12 border-dotted border-pink-300 first:mt-0 last:mb-0', additionalClass)
    }
  />
);
