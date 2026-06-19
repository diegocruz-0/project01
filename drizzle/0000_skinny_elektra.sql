CREATE TABLE "links" (
	"short_code" varchar(64) PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"clerk_user_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "links_clerk_user_id_idx" ON "links" USING btree ("clerk_user_id");