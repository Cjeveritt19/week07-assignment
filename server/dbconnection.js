import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const dbConnectionSrting = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionSrting,
});
