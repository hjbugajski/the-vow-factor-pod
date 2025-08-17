# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm i:dev` - Start development server with Infisical (secrets management)
- `pnpm dev:clean` - Clean build cache and start fresh development server
- `pnpm build` - Production build with Turbopack
- `pnpm i:build` - Production build with Infisical
- `pnpm start` - Start production server

### Database & CMS

- `pnpm migrate` - Run Payload CMS database migrations
- `pnpm i:migrate` - Run migrations with Infisical
- `pnpm migrate:create` - Create new migration
- `pnpm migrate:dev` - Clean migrations and create/run new ones
- `pnpm generate:types` - Generate TypeScript types from Payload schema
- `pnpm generate:importmap` - Generate import map for Payload admin

### Code Quality

- `pnpm lint` - Run Next.js linter
- `pnpm lint:all` - Run all linters (Prettier, ESLint, Stylelint)
- `pnpm eslint` - Run ESLint only
- `pnpm eslint:fix` - Run ESLint with auto-fix
- `pnpm prettier` - Check Prettier formatting
- `pnpm prettier:fix` - Fix Prettier formatting
- `pnpm stylelint` - Run CSS linter
- `pnpm stylelint:fix` - Fix CSS linting issues

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **CMS**: Payload CMS v3 with PostgreSQL database
- **Styling**: Tailwind CSS v4 with Radix UI components
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend integration with React Email templates
- **Storage**: Cloudflare R2 for images
- **Environment**: Type-safe env vars with @t3-oss/env-nextjs

### Directory Structure

#### App Routes

- `src/app/(payload)/` - Payload CMS admin interface
  - `admin/` - Admin panel routes
  - `api/` - Payload API endpoints and GraphQL
- `src/app/(site)/` - Public website routes
  - `[[...slug]]/` - Dynamic page routing
  - `next/` - Preview and live preview routes

#### Components

- `src/components/blocks/` - Payload block components (hero, form, columns, etc.)
- `src/components/rich-text/` - Rich text converters for Lexical editor
- `src/components/ui/` - Reusable UI components (button, form, input, etc.)
- `src/components/` - Layout components (navigation, footer)

#### Payload CMS

- `src/payload/collections/` - Data models (pages, images, forms, clients, users)
- `src/payload/blocks/` - Content block definitions
- `src/payload/globals/` - Global data (navigation, footer)
- `src/payload/fields/` - Reusable field definitions
- `src/payload/access/` - Permission and access control
- `src/payload/migrations/` - Database migrations

#### Configuration

- `src/env/` - Environment variable validation (client/server split)
- `src/payload/payload.config.ts` - Main Payload CMS configuration

### Key Features

- **Live Preview**: Real-time content preview with breakpoint simulation
- **Nested Pages**: Hierarchical page structure with breadcrumbs
- **Form Builder**: Dynamic forms with email notifications
- **Image Management**: S3-compatible storage with Sharp processing
- **Role-based Access**: Admin and user role permissions
- **Email Templates**: React Email components for notifications

### Development Notes

- Uses `infisical` for secrets management (commands prefixed with `i:`)
- GraphQL API is disabled in favor of REST
- Images stored in Cloudflare R2 bucket
- Database uses UUID primary keys
- TypeScript types auto-generated from Payload schema at `src/payload/payload-types.ts`
