import { RichText } from '@/components/rich-text';
import type { PayloadColumnsBlock } from '@/payload/payload-types';

export function ColumnsBlock({ contentColumnOne, contentColumnTwo }: PayloadColumnsBlock) {
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
