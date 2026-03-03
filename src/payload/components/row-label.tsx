'use client';

import { useRowLabel } from '@payloadcms/ui';
import type { Data } from 'payload';

export function RowLabel({ path, fallback }: { path: string; fallback: string }) {
  const { data, rowNumber } = useRowLabel<Data>();
  const fieldValue = path
    .split('.')
    .reduce<unknown>((value, part) => (value as Record<string, unknown>)?.[part], data);

  return (typeof fieldValue === 'string' && fieldValue) || `${fallback} ${rowNumber}`;
}
