import { Response, Request } from "express";
import Student from "../models/Student";
import { createDbConnection } from "../db/dbConfig";


let db = createDbConnection();

const studentsRoot = (req: Request, res: Response) => {
    res.send("Página Inicial Students");
}

const studentsList = (req: Request, res: Response) => {

    let studentsList: any = [];

    let sql = `SELECT * FROM students`;

    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            res.send(error.message);
        }
        rows.forEach((row: any) => { studentsList.push(row) });
        res.send(studentsList);
    }
    );
}

const studentsListByYearAndRoom = (req: Request, res: Response) => {
    let studentsList: any = [];
    let year = req.query.year;
    let room = req.query.room?.toString().toUpperCase();

    let sql = `SELECT * FROM students WHERE year="${year}" AND room="${room}"`;

    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: any) => { studentsList.push(row) });
            res.send(studentsList);
        } else {
            res.send("Os parâmetros apresentados não rertonaram resultado.");
        }

    })
}



const studentDetailsByQuery = (req: Request, res: Response) => {
    let id: any = req.query.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;

    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            res.send(rows[0]);
        } else {
            res.send("Estudante não existe");
        }

    }
    );
}

const studentDetailsByParams = (req: Request, res: Response) => {
    let id: any = req.params.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;

    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            res.send(error.message);
        }
        if (rows.length > 0) {
            res.send(rows[0]);
        } else {
            res.send("Estudante não existe");
        }

    }
    );
}

const addStudent = (req: Request, res: Response) => {

    let student: Student = req.body;
    let roomToUppercase: string = student.room.toUpperCase();

    let sql = `INSERT INTO students(name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${roomToUppercase}")`;

    if (student.name && student.shift && student.year && student.room) {
        db.run(sql,
            (error: any) => {
                if (error) {
                    res.end(error.message);
                }
                res.send(`Student ${student.name} Added`);
            })
    } else {
        res.send("Erro na criação do estudante. Verifique se todos os campos foram preenchidos");
    }

}

const updateStudent = (req: Request, res: Response) => {
    let student: Student = req.body;
    let roomToUppercase = student.room.toUpperCase();
    let sql = `UPDATE students SET name="${student.name}", 
                                   shift="${student.shift}", 
                                   year="${student.year}",
                                   room="${roomToUppercase}"
                                   WHERE id="${student.id}"
                                   `;


    db.all(sql, [], (error: any) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Updated");
    });
}

const deleteStudentByQuery = (req: Request, res: Response) => {
    let id: any = req.query.id;
    let sql = `DELETE from students WHERE id="${id}"`;

    db.all(sql, [], (error: any) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Deleted");
    })
}

const deleteStudentByParams = (req: Request, res: Response) => {
    let id: any = req.params.id;
    let sql = `DELETE from students WHERE id="${id}"`;

    db.all(sql, [], (error: any) => {
        if (error) {
            res.send(error.message);
        }
        res.send("Student Deleted");
    })
}



export {
    studentsRoot,
    studentsList,
    studentsListByYearAndRoom,
    studentDetailsByQuery, 
    studentDetailsByParams, 
    addStudent, 
    updateStudent, 
    deleteStudentByQuery, 
    deleteStudentByParams
};