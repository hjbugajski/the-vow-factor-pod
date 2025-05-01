import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 isolate z-30 flex h-20 items-center bg-black/95 shadow-lg shadow-black/25 backdrop-blur-xl">
      <ul className="relative mx-auto flex w-full max-w-7xl items-center gap-8 px-6">
        <li className="mr-auto">
          <Link href="/" className="font-display text-lg text-pink-200">
            The Vow Factor Podcast
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium text-pink-200">
            About
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium text-pink-200">
            Resources
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium text-pink-200">
            Watch
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/" className="text-lg font-medium text-pink-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
