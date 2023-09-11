"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfessionalByParams = exports.deleteProfessionalByQuery = exports.updateProfessionalBySpecificField = exports.professionalDetailsByParams = exports.professionalDetailsByQuery = exports.professionalsListByYearAndRoom = exports.professionalsList = exports.professionalsRoot = void 0;
const dbConfig_1 = require("../db/dbConfig");
const logger_1 = __importDefault(require("../services/logger"));
let db = (0, dbConfig_1.createDbConnection)();
const professionalsRoot = (req, res, next) => {
    // logger.fatal("fatal");
    // logger.error("error");
    // logger.warn("warn");
    // logger.info("info");
    // logger.debug("debug");
    // logger.trace("trace");
    //res.sendStatus(201);
    res.send("Página Inicial professionals");
};
exports.professionalsRoot = professionalsRoot;
const professionalsList = (req, res) => {
    let professionalsList = [];
    let sql = `SELECT * FROM professionals`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            logger_1.default.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row) => { professionalsList.push(row); });
        logger_1.default.info(req);
        res.send(professionalsList);
    });
};
exports.professionalsList = professionalsList;
const professionalsListByYearAndRoom = (req, res) => {
    var _a;
    logger_1.default.info(req);
    let professionalsList = [];
    let year = req.query.year;
    let room = (_a = req.query.room) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase();
    let sql = `SELECT * FROM professionals WHERE year="${year}" AND room="${room}"`;
    db.all(sql, [], (error, rows) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row) => { professionalsList.push(row); });
            res.send(professionalsList);
        }
        else {
            res.send("Os parâmetros apresentados não rertonaram resultado.");
        }
    });
};
exports.professionalsListByYearAndRoom = professionalsListByYearAndRoom;
const professionalDetailsByQuery = (req, res) => {
    logger_1.default.info(req);
    let id = req.query.id;
    let sql = `SELECT * FROM professionals WHERE id="${id}"`;
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
exports.professionalDetailsByQuery = professionalDetailsByQuery;
const professionalDetailsByParams = (req, res) => {
    logger_1.default.info(req);
    let id = req.params.id;
    let sql = `SELECT * FROM professionals WHERE id="${id}"`;
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
exports.professionalDetailsByParams = professionalDetailsByParams;
// const addProfessional = (req: Request, res: Response) => {
//     logger.info(req);
//     let token = req.headers.authorization;
//     if (token == "Bearer 12345") {
//         let Professional: Professional = req.body;
//         let roomToUppercase: string = Professional.room.toUpperCase();
//         let sql = `INSERT INTO professionals(name, shift, year, room) VALUES ("${Professional.name}", "${Professional.shift}", "${Professional.year}", "${roomToUppercase}")`;
//         if (Professional.name && Professional.shift && Professional.year && Professional.room) {
//             db.run(sql,
//                 (error: Error) => {
//                     if (error) {
//                         res.end(error.message);
//                     }
//                     res.send(`Professional ${Professional.name} Added`);
//                 })
//         } else {
//             res.send("Erro na criação do estudante. Verifique se todos os campos foram preenchidos");
//         }
//     } else {
//         res.sendStatus(403);
//     }
// }
// const updateProfessional = (req: Request, res: Response) => {
//     logger.info(req);
//     let Professional: Professional = req.body;
//     let roomToUppercase = Professional.room.toUpperCase();
//     let sql = `UPDATE professionals SET name="${Professional.name}", 
//                                    shift="${Professional.shift}", 
//                                    year="${Professional.year}",
//                                    room="${roomToUppercase}"
//                                    WHERE id="${Professional.id}"
//                                    `;
//     db.all(sql, [], (error: Error) => {
//         if (error) {
//             res.send(error.message);
//         }
//         res.send("Professional Updated");
//     });
// }
const updateProfessionalBySpecificField = (req, res) => {
    logger_1.default.info(req);
    let Professional = req.body;
    let sql = `UPDATE professionals SET name="${Professional.name}"
                                   WHERE id="${Professional.id}"
    `;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Professional Updated");
    });
};
exports.updateProfessionalBySpecificField = updateProfessionalBySpecificField;
const deleteProfessionalByQuery = (req, res) => {
    logger_1.default.info(req);
    let id = req.query.id;
    let sql = `DELETE from professionals WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Professional Deleted");
    });
};
exports.deleteProfessionalByQuery = deleteProfessionalByQuery;
const deleteProfessionalByParams = (req, res) => {
    logger_1.default.info(req);
    let id = req.params.id;
    let sql = `DELETE from professionals WHERE id="${id}"`;
    db.all(sql, [], (error) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Professional Deleted");
    });
};
exports.deleteProfessionalByParams = deleteProfessionalByParams;
