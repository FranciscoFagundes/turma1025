"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveData = exports.insertData = exports.createDbConnection = void 0;
const sqlite3 = require("sqlite3").verbose();
const filePath = "./db/school.db";
let db = null;
const createDbConnection = () => {
    db = new sqlite3.Database(filePath, (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    createTable();
    return db;
};
exports.createDbConnection = createDbConnection;
const createTable = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50),
            shift VARCHAR(50),
            year VARCHAR(50),
            room VARCHAR(50)
     );
    `);
};
const insertData = () => {
    let sql = `INSERT INTO students(name, shift, year, room) VALUES ("Ronaldo", "manhã", "8", "A")`;
    db.run(sql, (error) => {
        if (error) {
            return console.error(error.message);
        }
        console.log("Student Added");
    });
};
exports.insertData = insertData;
const receiveData = () => {
    let sql = `SELECT * FROM students`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            return console.error(error.message);
        }
        rows.forEach((row) => { console.log(row); });
    });
};
exports.receiveData = receiveData;
