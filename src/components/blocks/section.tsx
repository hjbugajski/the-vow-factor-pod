import { cva } from 'class-variance-authority';

import { RichText } from '@/components/rich-text';
import type { PayloadSectionBlock } from '@/payload/payload-types';

const sectionVariants = cva('group relative isolate breakout-section overflow-hidden', {
  variants: {
    backgroundColor: {
      default: '',
      pink: '',
    },
  },
});

export function SectionBlock({ backgroundColor, content }: PayloadSectionBlock) {
  return (
    <section className={sectionVariants({ backgroundColor })}>
      <div className="border-dotted border-pink-300 py-16 group-not-first-of-type:border-t-12">
        <RichText data={content} />
      </div>
    </section>
  );
}
