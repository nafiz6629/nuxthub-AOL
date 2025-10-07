PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_post` (
	`post_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_id` integer DEFAULT 1 NOT NULL,
	`post_title` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_post`("post_id", "category_id", "post_title", "created_at") SELECT "post_id", "category_id", "post_title", "created_at" FROM `post`;--> statement-breakpoint
DROP TABLE `post`;--> statement-breakpoint
ALTER TABLE `__new_post` RENAME TO `post`;--> statement-breakpoint
PRAGMA foreign_keys=ON;