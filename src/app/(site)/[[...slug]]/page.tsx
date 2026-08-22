import { Suspense } from 'react';

import { cacheLife, cacheTag } from 'next/cache';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

import config from '@payload-config';

import { metadata } from '@/app/(site)/layout';
import { LivePreviewListener } from '@/components/live-preview-listener';
import { RichText } from '@/components/rich-text';
import { pageTitle } from '@/utils/page-title';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

/**
 * Draft mode is readable inside a caching scope, and when it is enabled the scope re-executes on
 * every request without being persisted, so editors always see fresh content.
 */
const fetchCachedPage = async (slug?: string[]) => {
  'use cache';
  const path = `/${(slug?.length ? slug : ['home']).join('/')}`;

  cacheLife('max');
  cacheTag('pages', `page_${path}`);

  const [{ isEnabled: draft }, payload] = await Promise.all([draftMode(), getPayload({ config })]);
  const result = await payload.find({
    collection: 'pages',
    draft,
    pagination: false,
    limit: 1,
    overrideAccess: draft,
    where: { path: { equals: path } },
  });

  return { draft, page: result.docs?.[0] || null };
};

export async function generateStaticParams() {
  const fallback = [{ slug: [] }];

  try {
    const payload = await getPayload({ config });
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      pagination: false,
      overrideAccess: false,
      select: { path: true },
    });
    const params = pages.docs.map(({ path }) => ({
      slug: path && path !== '/home' ? path.split('/').slice(1) : [],
    }));

    return params.length ? params : fallback;
  } catch {
    return fallback;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const { page } = await fetchCachedPage(slug);

  return {
    title: pageTitle(page?.title, metadata),
    description: page?.description || metadata.description,
  };
}

async function PageContent({ params }: PageProps) {
  const { slug } = await params;
  const { draft, page } = await fetchCachedPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      {draft ? <LivePreviewListener /> : null}
      <RichText data={page.content} />
    </>
  );
}

function PageContentFallback() {
  return (
    <div aria-hidden className="flex animate-pulse flex-col gap-6 py-8">
      <div className="h-12 w-2/3 rounded-2xl bg-pink-900/10" />
      <div className="h-5 w-full rounded-lg bg-pink-900/10" />
      <div className="h-5 w-5/6 rounded-lg bg-pink-900/10" />
      <div className="h-5 w-3/4 rounded-lg bg-pink-900/10" />
    </div>
  );
}

/**
 * The `params` promise is passed down unawaited so the App Shell stays shared across every URL of
 * this route, and only the page content streams in per navigation.
 */
export default function Page({ params }: PageProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-12">
      <Suspense fallback={<PageContentFallback />}>
        <PageContent params={params} />
      </Suspense>
    </main>
  );
}
