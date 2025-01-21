import { pgTable, varchar, date, integer, serial, timestamp, real } from 'drizzle-orm/pg-core';

export const membersTable = pgTable('members', {
	id: serial('id').primaryKey(),
	nickname: varchar('nickname', { length: 64 }).notNull(),
	join_date: date('join_date').notNull()
});

export const membersStatsTable = pgTable('members_stats', {
	id: integer('id').references(() => membersTable.id).unique().notNull(),
	points: integer('points').notNull(),
	rank: integer('rank').notNull(),
	last_updated: timestamp('last_updated').notNull(),
});

export const membersRanksTable = pgTable('members_ranks', {
	id: integer('id').references(() => membersTable.id).notNull(),
	map: varchar('map', { length: 256 }).notNull(),
	time: real('time').notNull(),
	rank: integer('rank').notNull(),
	category: varchar('category', { length: 256 }).notNull(),
});
