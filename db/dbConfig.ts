
import { sqlite3 } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const filePath = "./db/school.db";

let db: any = null;

const createDbConnection = () => {
    db = new sqlite3.Database(filePath, (error: any) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    createTable();
    return db;
}

const createTable = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50),
            shift VARCHAR(50),
            year VARCHAR(50),
            room VARCHAR(50)
     );
    `);
}



export { createDbConnection }