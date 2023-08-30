import Student from "../models/Student";

const sqlite3 = require("sqlite3").verbose();
const filepath = "./db/school.db";

let db: any = null

const createDbConnection = () => {
    db = new sqlite3.Database(filepath, (error: any) => {
        if (error) {
            return console.error(error.message);
        }
        createTable();
    });
    console.log("Connection with SQLite has been established")
    return db;
}


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
}

const insertData = (student: Student) => {
    db.run(
        `INSERT INTO students (name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${student.room}")`,
        function (error: any) {
            if (error) {
                console.error(error.message);
            }
            console.log(`Student added`);
        }
    );
}


const receiveData = () => {
    let sql = "Select * from students";

    db.all(sql, [], (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        rows.forEach((row: any) => {
            console.log(row);

        });
    });
}

export { createDbConnection, createTable, insertData, receiveData };