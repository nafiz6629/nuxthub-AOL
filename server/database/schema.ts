import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	avatar: text("avatar").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
})
export const post = sqliteTable("post", {
	post_id: integer("post_id").primaryKey({ autoIncrement: true }),
	category_id: integer("category_id"),
	post_title: text("post_title").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
})

export const category = sqliteTable("category", {
	category_id: integer("category_id").primaryKey({ autoIncrement: true }),
	category_name: text("category_name").notNull(),
	category_parent_id: text("category_parent_id").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
})
