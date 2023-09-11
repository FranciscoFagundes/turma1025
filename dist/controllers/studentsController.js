"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentByParams = exports.deleteStudentByQuery = exports.updateStudentBySpecificField = exports.updateStudent = exports.addStudent = exports.studentDetailsByParams = exports.studentDetailsByQuery = exports.studentsListByYearAndRoom = exports.studentsList = exports.studentsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const studentsRoot = (req, res, next) => {
    // logger.fatal("fatal");
    // logger.error("error");
    // logger.warn("warn");
    // logger.info("info");
    // logger.debug("debug");
    // logger.trace("trace");
    res.sendStatus(201);
    // res.send("Página Inicial Students");
};
exports.studentsRoot = studentsRoot;
const studentsList = (req, res) => {
    let studentsList = [];
    let sql = `SELECT * FROM students`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { studentsList.push(row); });
        logger_1.default.info(req);
        res.send(studentsList);
    });
};
exports.studentsList = studentsList;
const studentsListByYearAndRoom = (req, res) => {
    var _a;
    logger_1.default.info(req);
    let studentsList = [];
    let year = req.query.year;
    let room = (_a = req.query.room) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase();
    let sql = `SELECT * FROM students WHERE year="${year}" AND room="${room}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { studentsList.push(row); });
            res.send(studentsList);
        }
        else {
            res.send("Os parâmetros apresentados não rertonaram resultado.");
        }
    });
};
exports.studentsListByYearAndRoom = studentsListByYearAndRoom;
const studentDetailsByQuery = (req, res) => {
    logger_1.default.info(req);
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
    logger_1.default.info(req);
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
    logger_1.default.info(req);
    let token = req.headers.authorization;
    if (token == "Bearer 12345") {
        let student = req.body;
        let roomToUppercase = student.room.toUpperCase();
        let sql = `INSERT INTO students(name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${roomToUppercase}")`;
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
    }
    else {
        res.sendStatus(403);
    }
};
exports.addStudent = addStudent;
const updateStudent = (req, res) => {
    logger_1.default.info(req);
    let student = req.body;
    let roomToUppercase = student.room.toUpperCase();
    let sql = `UPDATE students SET name="${student.name}", 
                                   shift="${student.shift}", 
                                   year="${student.year}",
                                   room="${roomToUppercase}"
                                   WHERE id="${student.id}"
                                   `;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Updated");
    });
};
exports.updateStudent = updateStudent;
const updateStudentBySpecificField = (req, res) => {
    logger_1.default.info(req);
    let student = req.body;
    let sql = `UPDATE students SET name="${student.name}"
                                   WHERE id="${student.id}"
    `;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Updated");
    });
};
exports.updateStudentBySpecificField = updateStudentBySpecificField;
const deleteStudentByQuery = (req, res) => {
    logger_1.default.info(req);
    let id = req.query.id;
    let sql = `DELETE from students WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Deleted");
    });
};
exports.deleteStudentByQuery = deleteStudentByQuery;
const deleteStudentByParams = (req, res) => {
    logger_1.default.info(req);
    let id = req.params.id;
    let sql = `DELETE from students WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Deleted");
    });
};
exports.deleteStudentByParams = deleteStudentByParams;
