import 'dotenv/config';
import pg from "pg";
const { Pool } = pg;

// Conectarnos a la base de datos Postgres
const pool = new Pool({
    allowExitOnIdle : true,
    connectionString : process.env.CONNECTION_STRING
})


