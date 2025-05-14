import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "forms_blocks_date" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_email" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_phone_number" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_radio" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "name" varchar;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_date" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_email" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_phone_number" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_radio" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_select" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_text" ADD COLUMN "name" varchar;
  ALTER TABLE "_forms_v_blocks_textarea" ADD COLUMN "name" varchar;
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_date_name_idx" ON "forms_blocks_date" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_email_name_idx" ON "forms_blocks_email" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_phone_number_name_idx" ON "forms_blocks_phone_number" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_radio_name_idx" ON "forms_blocks_radio" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_name_idx" ON "forms_blocks_select" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_text_name_idx" ON "forms_blocks_text" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_textarea_name_idx" ON "forms_blocks_textarea" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_date_name_idx" ON "_forms_v_blocks_date" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_email_name_idx" ON "_forms_v_blocks_email" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_phone_number_name_idx" ON "_forms_v_blocks_phone_number" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_radio_name_idx" ON "_forms_v_blocks_radio" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_select_name_idx" ON "_forms_v_blocks_select" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_text_name_idx" ON "_forms_v_blocks_text" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "_forms_v_blocks_textarea_name_idx" ON "_forms_v_blocks_textarea" USING btree ("name");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "forms_blocks_date_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_email_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_phone_number_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_radio_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_select_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_text_name_idx";
  DROP INDEX IF EXISTS "forms_blocks_textarea_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_date_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_email_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_phone_number_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_radio_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_select_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_text_name_idx";
  DROP INDEX IF EXISTS "_forms_v_blocks_textarea_name_idx";
  ALTER TABLE "forms_blocks_date" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_email" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_phone_number" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_radio" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_select" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_text" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_date" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_email" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_phone_number" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_radio" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_select" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_text" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "_forms_v_blocks_textarea" DROP COLUMN IF EXISTS "name";`)
}
