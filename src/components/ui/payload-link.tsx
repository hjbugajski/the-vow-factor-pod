import Link from 'next/link';

import type { PayloadLinkGroupField } from '@/payload/payload-types';
import { linkProps } from '@/utils/link';

type Props = {
  className?: string;
  link: PayloadLinkGroupField;
  tabIndex?: number;
};

export function PayloadLink({ className, link, tabIndex }: Props) {
  return (
    <Link {...linkProps(link)} tabIndex={tabIndex} className={className}>
      {link.text}
    </Link>
  );
}
