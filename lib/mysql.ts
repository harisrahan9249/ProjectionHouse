import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.projectionhous,
  password: process.env.projectionhous,
  database: process.env.projectionhous,
  port: 3306,
});