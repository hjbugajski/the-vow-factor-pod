import { PayloadLink } from '@/components/ui/payload-link';
import { IconTheVowFactorAlt } from '@/icons/the-vow-factor-alt';
import type { PayloadFooterGlobal } from '@/payload/payload-types';

export function Footer({ linkGroups }: PayloadFooterGlobal) {
  return (
    <footer className="dark px-2">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-clip rounded-t-2xl bg-pink-950 p-6 pb-18 shadow-lg shadow-pink-950/15 outline-3 outline-pink-900/75 xs:pb-24 md:pb-28 md-lg:pb-32 lg:pb-36 xl:pb-48">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <h1 className="text-4xl xs:text-5xl">Links</h1>
          <div className="@container">
            <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-8 @sm:grid-cols-2 @md:grid-cols-3">
              {linkGroups?.map(({ id, heading, links }) => (
                <li key={id || heading}>
                  <h2 className="mb-2 font-sans font-semibold not-italic">{heading}</h2>
                  <ul className="flex flex-col gap-1">
                    {links.map((link) => (
                      <li key={link.id || link.text}>
                        <PayloadLink link={link} className="text-xl font-medium text-pink-100" />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <IconTheVowFactorAlt
          aria-hidden
          className="absolute bottom-0 h-auto w-full translate-y-1 px-6 text-pink-50 opacity-5 drop-shadow-lg drop-shadow-pink-300/25 xs:translate-y-2 md:translate-y-4 lg:translate-y-6 xl:translate-y-8"
        />
      </div>
    </footer>
  );
}
