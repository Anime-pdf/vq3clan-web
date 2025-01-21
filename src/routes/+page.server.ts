import { db } from '$lib/server/db';
import { membersTable } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		users: await db.select().from(membersTable)
	};
};