"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbConnection = void 0;
const sqlite3 = require("sqlite3").verbose();
const filePath = "./db/school.db";
const createDbConnection = () => {
    let db = new sqlite3.Database(filePath, (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    db.exec(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        shift VARCHAR(50),
        year VARCHAR(50),
        room VARCHAR(50)
        );
        `);
    db.exec(`CREATE TABLE IF NOT EXISTS professionals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50),
            birthday VARCHAR(50),
            adress VARCHAR(50),
            role VARCHAR(50),
            shift VARCHAR(50),
            sector VARCHAR(50)
            );
            `);
    return db;
};
exports.createDbConnection = createDbConnection;
