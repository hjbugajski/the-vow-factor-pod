import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "images" ADD COLUMN "link_umami_event" varchar;
  ALTER TABLE "images" ADD COLUMN "link_umami_event_id" varchar;
  ALTER TABLE "navigation_links" ADD COLUMN "umami_event" varchar;
  ALTER TABLE "navigation_links" ADD COLUMN "umami_event_id" varchar;
  ALTER TABLE "footer_link_groups_links" ADD COLUMN "umami_event" varchar;
  ALTER TABLE "footer_link_groups_links" ADD COLUMN "umami_event_id" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "images" DROP COLUMN IF EXISTS "link_umami_event";
  ALTER TABLE "images" DROP COLUMN IF EXISTS "link_umami_event_id";
  ALTER TABLE "navigation_links" DROP COLUMN IF EXISTS "umami_event";
  ALTER TABLE "navigation_links" DROP COLUMN IF EXISTS "umami_event_id";
  ALTER TABLE "footer_link_groups_links" DROP COLUMN IF EXISTS "umami_event";
  ALTER TABLE "footer_link_groups_links" DROP COLUMN IF EXISTS "umami_event_id";`)
}
