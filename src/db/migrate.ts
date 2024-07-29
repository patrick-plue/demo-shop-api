import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import db from './index';

// This will run migrations on the database, skipping the ones already applied
(async () => migrate(db, { migrationsFolder: './drizzle' }))();
