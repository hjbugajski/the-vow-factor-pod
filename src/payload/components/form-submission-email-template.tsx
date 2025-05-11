import { Body, Font, Head, Heading, Html, Preview, Tailwind } from '@react-email/components';

import { tailwindEmailConfig } from '@/config/tailwind-email';
import type {
  PayloadFormSubmissionsCollection,
  PayloadFormsCollection,
} from '@/payload/payload-types';
import { slugify } from '@/utils/slugify';

interface Props {
  data: PayloadFormSubmissionsCollection['data'];
  form: PayloadFormsCollection;
}

export const FormSubmissionEmailTemplate = ({ data, form }: Props) => (
  <Tailwind config={tailwindEmailConfig}>
    <Html lang="en">
      <Head>
        <Font
          fallbackFontFamily="sans-serif"
          fontFamily="Figtree"
          fontWeight={400}
          fontStyle="normal"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
            format: 'woff',
          }}
        />
        <title>{`New ${form.title} Submission`}</title>
      </Head>
      <Preview>You have a new {form.title.toLowerCase()} submission!</Preview>
      <Body className="bg-neutral-50 text-neutral-800 font-sans">
        <Heading as="h1" className="mt-10 mb-8 text-4xl first:mt-0 last:mb-0 xs:text-5xl">
          {form.title}
        </Heading>
        <dl>
          {data.map((field) => (
            <div key={field.id || slugify(field.label)} className="mb-6 last:mb-0">
              <dt className="text-neutral-600 m-0 mb-2 text-sm leading-none font-normal">
                {field.label}
              </dt>
              <dd className="m-0 text-lg">{field.value}</dd>
            </div>
          ))}
        </dl>
      </Body>
    </Html>
  </Tailwind>
);
