/**
 * The focus guard portion of this file is adapted from the Radix Primitives Focus Guards
 * https://github.com/radix-ui/primitives/tree/6469d41dcc6e84fe41d70a2703924338e7562dd1/packages/react/focus-guards
 *
 * ---
 *
 * MIT License

 * Copyright (c) 2022 WorkOS

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use client';

import { useEffect, useRef, useState } from 'react';

import { FocusScope } from '@radix-ui/react-focus-scope';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PayloadLink } from '@/components/ui/payload-link';
import { IconClose } from '@/icons/close';
import type { PayloadNavigationGlobal } from '@/payload/payload-types';

function createFocusGuard() {
  const element = document.createElement('span');

  element.setAttribute('data-radix-focus-guard', '');
  element.tabIndex = 0;
  element.style.outline = 'none';
  element.style.opacity = '0';
  element.style.position = 'fixed';
  element.style.pointerEvents = 'none';

  return element;
}

let count = 0;

export function Navigation({ links }: PayloadNavigationGlobal) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }

    setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth || 0;

      if (width >= 992) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');

      document.body.classList.add('overflow-hidden');
      ref.current?.insertAdjacentElement('afterbegin', edgeGuards[0] ?? createFocusGuard());
      ref.current?.insertAdjacentElement('beforeend', edgeGuards[1] ?? createFocusGuard());

      count++;
    } else {
      document.body.classList.remove('overflow-hidden');
      document.querySelectorAll('[data-radix-focus-guard]').forEach((node) => node.remove());
    }

    return () => {
      if (count === 1) {
        document.querySelectorAll('[data-radix-focus-guard]').forEach((node) => node.remove());
      }

      count--;
    };
  }, [open]);

  const toggleMenu = () => setOpen((open) => !open);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div
        aria-hidden
        data-state={open ? 'open' : 'closed'}
        className="transition-all transition-discrete duration-150 ease-out data-[state=open]:fixed data-[state=open]:inset-0 data-[state=open]:z-40 data-[state=open]:bg-pink-300/25 data-[state=open]:backdrop-blur-sm"
      />
      <nav
        ref={ref}
        role={open ? 'dialog' : 'navigation'}
        className="fixed inset-x-0 top-0 isolate z-50 flex items-center p-2"
      >
        <FocusScope
          loop={open}
          trapped={open}
          onMountAutoFocus={(e) => e.preventDefault()}
          data-scrolled={scrolled}
          data-open={open}
          className="relative mx-auto flex w-full max-w-7xl flex-col gap-2 overflow-clip rounded-2xl bg-pink-50 py-3 pr-3 pl-6 outline-3 outline-transparent transition-all transition-discrete duration-300 ease-navigation data-[open=false]:max-h-16 data-[open=true]:max-h-screen data-[open=true]:shadow-lg data-[open=true]:shadow-pink-950/15 data-[open=true]:outline-pink-900/75 data-[scrolled=true]:shadow-lg data-[scrolled=true]:shadow-pink-950/15 data-[scrolled=true]:outline-pink-900/75 md:pr-6 starting:h-16"
        >
          <ul className="flex h-10 w-full items-center gap-6">
            <li className="mr-auto">
              <Link href="/" onClick={closeMenu} className="font-display xxs:text-lg">
                The Vow Factor Podcast
              </Link>
            </li>
            <li className="md:hidden">
              <Button
                variant="icon"
                onClick={toggleMenu}
                aria-label={open ? 'Close navigation' : 'Open navigation'}
                size="sm"
              >
                <IconClose
                  data-open={open}
                  className="size-5 transition-all duration-300 ease-in-out data-[open=false]:rotate-45"
                />
              </Button>
            </li>
            {links?.map((link) => (
              <li key={link.id} className="hidden md:block">
                <PayloadLink link={link} className="text-lg font-medium" />
              </li>
            ))}
          </ul>
          <ul className="w-full md:hidden">
            {links?.map((link) => (
              <li key={link.id} onClick={closeMenu} className="py-2">
                <PayloadLink
                  link={link}
                  tabIndex={open ? 0 : -1}
                  className="text-2xl font-medium"
                />
              </li>
            ))}
          </ul>
        </FocusScope>
      </nav>
    </>
  );
}
