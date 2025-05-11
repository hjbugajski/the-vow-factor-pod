import { PayloadLink } from '@/components/ui/payload-link';
import type { PayloadLinksBlock } from '@/payload/payload-types';

export function LinksBlock({ links }: PayloadLinksBlock) {
  return (
    <ul className="mx-auto flex w-full flex-col gap-1 sm:max-w-106.25">
      {links?.map((link) => (
        <li key={link.id || link.text} className="w-full">
          <PayloadLink
            link={link}
            className="flex w-full items-center justify-center rounded-2xl border-3 border-pink-900/75 bg-pink-100 px-6 py-4 text-2xl font-semibold shadow-lg shadow-pink-950/15 transition duration-300 hover:border-pink-950/75 hover:bg-pink-200/75 hover:text-pink-950 hover:no-underline"
          />
        </li>
      ))}
    </ul>
  );
}
