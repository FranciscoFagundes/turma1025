"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.studentsList = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const studentsArray = [
    {
        id: 1,
        name: "Francisco Fagundes",
        shift: "tarde",
        year: "6",
        room: "C"
    },
    {
        id: 2,
        name: "Carol Cozer",
        shift: "manhã",
        year: "7",
        room: "A"
    },
    {
        id: 3,
        name: "Andreia Silva",
        shift: "tarde",
        year: "8",
        room: "B"
    }
];
const studentsRoot = (req, res) => {
    res.send("Página Inicial Students");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    (0, dbConfig_1.receiveData)();
    res.end();
};
exports.studentsList = studentsList;
const addStudent = (req, res) => {
    // let name = req.body.name;
    // let shift = req.body.shift;
    // let year = req.body.year;
    // let room = req.body.room;
    // console.log(req.body);
    let student = req.body;
    (0, dbConfig_1.insertData)(student);
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
