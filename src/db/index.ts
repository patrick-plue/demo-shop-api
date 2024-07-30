import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
export const pool = new Pool({
    connectionString: process.env.PG_URI,
});

const db = drizzle(pool, { schema });

export default db;
