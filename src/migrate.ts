import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import db from './db/index';
import { pool } from './db/index';

(async () => {
    await migrate(db, { migrationsFolder: './drizzle' });
    await pool.end();
})();
