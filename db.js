import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	port: "3306",
	database: process.env.DATABASE,
});
