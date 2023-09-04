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

const studentDetailsByQuery = (req: Request, res: Response) => {
    let id: any = req.query.id;
    let sql = `SELECT * FROM students WHERE id="${id}"`;
    
    db.all(sql, [], (error: any, rows: any) => {
        if (error) {
            res.send(error.message);
        }
        if(rows.length > 0){
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
        if(rows.length > 0){
            res.send(rows[0]);
        } else {
            res.send("Estudante não existe");
        }
        
    }
    );
}

const addStudent = (req: Request, res: Response) => {

    let student: Student = req.body;
    let sql = `INSERT INTO students(name, shift, year, room) VALUES ("${student.name}", "${student.shift}", "${student.year}", "${student.room}")`;

    if(student.name && student.shift && student.year && student.room){
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
    res.send("Student Updated");
}

const deleteStudent = (req: Request, res: Response) => {
    res.send("Student Deleted");
}

export { studentsRoot, studentsList, studentDetailsByQuery, studentDetailsByParams, addStudent, updateStudent, deleteStudent };