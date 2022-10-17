import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shortly',
    password: 'HTSIO7',
    port: 5432

    //connectionString: process.env.DATABASE_URL

    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: `${process.env.PGPASSWORD}`,
    // port: process.env.PGPORT


})

//console.log(connection)
export default connection;