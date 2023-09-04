"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.studentDetailsByParams = exports.studentDetailsByQuery = exports.studentsList = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
let db = (0, dbConfig_1.createDbConnection)();
const studentsRoot = (req, res) => {
    res.send("Página Inicial Students");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    let studentsList = [];
    let sql = `SELECT * FROM students`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            res.send(error.message);
        }
        rows.forEach((row) => { studentsList.push(row); });
        res.send(studentsList);
    });
};
exports.studentsList = studentsList;
const studentDetailsByQuery = (req, res) => {
    let id = req.query.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            res.send(rows[0]);
        }
        else {
            res.send("Estudante não existe");
        }
    });
};
exports.studentDetailsByQuery = studentDetailsByQuery;
const studentDetailsByParams = (req, res) => {
    let id = req.params.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            res.send(rows[0]);
        }
        else {
            res.send("Estudante não existe");
        }
    });
};
exports.studentDetailsByParams = studentDetailsByParams;
const addStudent = (req, res) => {
    let student = req.body;
    let sql = `INSERT INTO students(name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${student.room}")`;
    if (student.name && student.shift && student.year && student.room) {
        db.run(sql, (error) => {
            if (error) {
                res.end(error.message);
            }
            res.send(`Student ${student.name} Added`);
        });
    }
    else {
        res.send("Erro na criação do estudante. Verifique se todos os campos foram preenchidos");
    }
};
exports.addStudent = addStudent;
const updateStudent = (req, res) => {
    res.send("Student Updated");
};
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => {
    res.send("Student Deleted");
};
exports.deleteStudent = deleteStudent;
