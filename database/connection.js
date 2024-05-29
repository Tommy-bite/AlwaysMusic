import 'dotenv/config';
import pg from "pg";
const { Pool } = pg;

// Conectarnos a la base de datos Postgres
export const pool = new Pool({
    allowExitOnIdle : true,
    connectionString : process.env.CONNECTION_STRING
})

try {
    await pool.query("SELECT NOW()");
    console.log("Conexion a Postgres ok....");
} catch (error) {
    console.log(error);
}

