# The Vow Factor Podcast

This repository contains the source code for "The Vow Factor Podcast" project, a web application built with Next.js and Payload CMS.

## Overview

The project is a full-stack application designed to manage content and provide a user-facing website. It leverages the power of Next.js for the frontend and server-side rendering, and Payload CMS as a headless CMS for managing data such as pages, clients, forms, and images.

## Tech Stack

### Core Frameworks & Libraries

- **Framework**: [Next.js](https://nextjs.org/) (v15) - A React framework for building server-rendered and statically generated web applications.
- **CMS**: [Payload CMS](https://payloadcms.com/) (v3) - A headless CMS for managing content, with a PostgreSQL database backend.

### Styling

- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) (v4) - A utility-first CSS framework.
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - For unstyled, accessible UI primitives.

### Forms

- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/) (used with React Hook Form via `@hookform/resolvers`)

### Email

- **Email Sending**: [Resend](https://resend.com/) (integrated with Payload CMS via `@payloadcms/email-resend`)
- **Email Templates**: [React Email](https://react.email/)

### Development Tools

- **Linting**:
  - [ESLint](https://eslint.org/) - For JavaScript and TypeScript code.
  - [Stylelint](https://stylelint.io/) - For CSS.
- **Formatting**: [Prettier](https://prettier.io/)
- **Package Manager**: [pnpm](https://pnpm.io/)

### Backend & Database

- **Database**: [PostgreSQL](https://www.postgresql.org/) (via `@payloadcms/db-postgres`)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/)

### Key Features & Structure

- **Payload Admin Panel**: Located under `src/app/(payload)/admin/`, providing a UI for content management.
- **Site Frontend**: Located under `src/app/(site)/`, serving the public-facing website.
- **Reusable Components**: Found in `src/components/`, including UI elements and layout components.
- **Payload Collections**: Defined in `src/payload/collections/`, including `Clients`, `FormSubmissions`, `Forms`, `Images`, `Pages`, and `Users`.
- **Payload Blocks**: Custom content blocks for flexible page building are defined in `src/payload/blocks/`.
- **Live Preview**: Integrated with Payload CMS for real-time content previews.
- **Environment Variable Management**: Uses `@t3-oss/env-nextjs` for type-safe environment variables.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
