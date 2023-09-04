
import { sqlite3 } from "sqlite3";
import Student from "../models/Student";

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

const insertStudent = (student: Student) => {

    let sql = `INSERT INTO students(name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${student.room}")`;

    db.run(sql,
        (error: any) => {
            if (error) {
                return console.error(error.message);
            }
            console.log("Student Added");
        })
}

const receiveStudentsList = () => {
    let sql = `SELECT * FROM students`;
    let studentsList: any = [];

    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            return console.error(error.message);
        }
        rows.forEach((row: any) => { studentsList.push(row) });
        return studentsList;
    }
    );
    
}

export { createDbConnection, insertStudent, receiveStudentsList }