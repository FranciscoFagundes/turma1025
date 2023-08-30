"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.studentsList = exports.studentsRoot = void 0;
const studentsRoot = (req, res) => {
    res.send("Página Inicial Students");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    res.end();
};
exports.studentsList = studentsList;
const addStudent = (req, res) => {
    res.send("Student Added");
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
