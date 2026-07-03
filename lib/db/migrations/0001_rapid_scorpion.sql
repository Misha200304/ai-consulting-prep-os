CREATE TABLE "diagnostic_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"education_level" varchar(100) NOT NULL,
	"field_of_study" varchar(150),
	"consulting_familiarity" varchar(150) NOT NULL,
	"target_firms" text,
	"target_role" varchar(100),
	"interview_date" date,
	"prep_level" varchar(100) NOT NULL,
	"cases_practiced" varchar(50) NOT NULL,
	"biggest_struggles" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"hardest_part" text,
	"status" varchar(50) DEFAULT 'submitted' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "diagnostic_submissions" ADD CONSTRAINT "diagnostic_submissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;