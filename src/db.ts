import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "testTodo",
  password: "admin",
  port: 5432, // or the port you are using for PostgreSQL
});

export default pool;