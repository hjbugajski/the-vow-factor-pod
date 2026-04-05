import type { ComponentType } from 'react';

import type { PayloadColumnsBlock } from '@/payload/payload-types';

interface ColumnsBlockProps extends PayloadColumnsBlock {
  RichText: ComponentType<{ data?: PayloadColumnsBlock['contentColumnOne'] }>;
}

export function ColumnsBlock({ contentColumnOne, contentColumnTwo, RichText }: ColumnsBlockProps) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <section>
        <RichText data={contentColumnOne} />
      </section>
      <section>
        <RichText data={contentColumnTwo} />
      </section>
    </div>
  );
}
