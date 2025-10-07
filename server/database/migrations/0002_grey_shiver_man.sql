CREATE TABLE `category` (
	`category_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_name` text NOT NULL,
	`category_parent_id` text NOT NULL,
	`created_at` integer NOT NULL
);
