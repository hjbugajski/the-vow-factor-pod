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
  params: Promise<{ slug: string[] }>;
}

/**
 * Draft mode is readable inside a caching scope, and when it is enabled the scope re-executes on
 * every request without being persisted, so editors always see fresh content.
 */
const fetchCachedPage = async (slug: string[]) => {
  'use cache';
  const path = `/${(slug || ['home']).join('/')}`;

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
  try {
    const payload = await getPayload({ config });
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      pagination: false,
      overrideAccess: false,
      select: { path: true },
    });

    return pages.docs.map(({ path }) => ({ slug: path?.split('/')?.slice(1) || undefined }));
  } catch {
    return [{ slug: undefined }];
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

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { draft, page } = await fetchCachedPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-12">
      {draft ? <LivePreviewListener /> : null}
      <RichText data={page.content} />
    </main>
  );
}
