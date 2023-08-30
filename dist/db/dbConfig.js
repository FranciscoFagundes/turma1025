"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveData = exports.insertData = exports.createTable = exports.createDbConnection = void 0;
const sqlite3 = require("sqlite3").verbose();
const filepath = "./db/school.db";
let db = null;
const createDbConnection = () => {
    db = new sqlite3.Database(filepath, (error) => {
        if (error) {
            return console.error(error.message);
        }
        createTable();
    });
    console.log("Connection with SQLite has been established");
    return db;
};
exports.createDbConnection = createDbConnection;
const createTable = () => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS students
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      name   VARCHAR(50) NOT NULL,
      shift   VARCHAR(50) NOT NULL,
      year VARCHAR(50) NOT NULL,
      room VARCHAR(50) NOT NULL
    );
  `);
};
exports.createTable = createTable;
const insertData = (student) => {
    db.run(`INSERT INTO students (name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${student.room}")`, function (error) {
        if (error) {
            console.error(error.message);
        }
        console.log(`Student added`);
    });
};
exports.insertData = insertData;
const receiveData = () => {
    let sql = "Select * from students";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
    });
};
exports.receiveData = receiveData;
