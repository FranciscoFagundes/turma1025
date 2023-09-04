"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.studentsList = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
let db = (0, dbConfig_1.createDbConnection)();
const studentsRoot = (req, res) => {
    res.send("Página Inicial Students");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    let studentsList = [];
    studentsList = (0, dbConfig_1.receiveStudentsList)();
    res.send(studentsList);
    // let sql = `SELECT * FROM students`;
    // db.all(sql, [], (error: any, rows: any) => {
    //     if (error) {
    //         return console.error(error.message);
    //     }
    //     rows.forEach((row: any) => { studentsList.push(row) })
    //     res.send(studentsList);
    // });
};
exports.studentsList = studentsList;
const studentDetails = (req, res) => {
    res.send("Student details");
};
const addStudent = (req, res) => {
    let student = req.body;
    try {
        (0, dbConfig_1.insertStudent)(student);
        res.send("Student Added With Success!");
    }
    catch (error) {
        //TO DO - pensar numa forma de enviar o erro do DB.
        res.send(`Student Not Added, Try Again! ${error}`);
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
