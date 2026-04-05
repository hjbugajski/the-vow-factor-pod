import type { ComponentType, ReactNode } from 'react';

import { FormClient } from '@/components/blocks/form/form.client';
import type { PayloadFormBlock, PayloadFormsCollection } from '@/payload/payload-types';
import { slugify } from '@/utils/slugify';

interface FormBlockProps extends PayloadFormBlock {
  RichText: ComponentType<{
    data?: PayloadFormsCollection['description'];
    overrideClasses?: Record<string, string>;
  }>;
}

export function FormBlock(props: FormBlockProps) {
  const { form, RichText } = props;

  if (!form || typeof form === 'string') {
    // TODO: make alert component
    return <p>There was an error rendering the form. Please reload the page and try again.</p>;
  }

  const fieldDescriptions: Record<string, ReactNode> = {};

  for (const field of form.fields) {
    if (field.description) {
      fieldDescriptions[field.name] = (
        <RichText
          data={field.description}
          overrideClasses={{ paragraph: 'text-base text-pink-900/75' }}
        />
      );
    }
  }

  return (
    <section className="mx-auto w-full max-w-4xl">
      <h1 id={slugify(form.title)} className="mt-10 mb-8 text-4xl first:mt-0 last:mb-0 xs:text-5xl">
        {form?.title}
      </h1>
      <RichText data={form.description} />
      <FormClient {...form} fieldDescriptions={fieldDescriptions} />
    </section>
  );
}
