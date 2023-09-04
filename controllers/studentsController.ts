import { Response, Request } from "express";
import Student from "../models/Student";
import { createDbConnection, insertStudent, receiveStudentsList } from "../db/dbConfig";


let db = createDbConnection();

const studentsRoot = (req: Request, res: Response) => {
    res.send("Página Inicial Students");
}

const studentsList = (req: Request, res: Response) => {
    let studentsList: any = [];

    studentsList = receiveStudentsList();

    res.send(studentsList);
    // let sql = `SELECT * FROM students`;

    // db.all(sql, [], (error: any, rows: any) => {
    //     if (error) {
    //         return console.error(error.message);
    //     }
    //     rows.forEach((row: any) => { studentsList.push(row) })
    //     res.send(studentsList);
    // });
}

const studentDetails = (req: Request, res: Response) => {
    res.send("Student details");
}

const addStudent = (req: Request, res: Response) => {
    let student: Student = req.body;
    try {
        insertStudent(student);
        res.send("Student Added With Success!");
    } catch (error) {
        //TO DO - pensar numa forma de enviar o erro do DB.
        res.send(`Student Not Added, Try Again! ${error}`);
    }
}

const updateStudent = (req: Request, res: Response) => {
    res.send("Student Updated");
}

const deleteStudent = (req: Request, res: Response) => {
    res.send("Student Deleted");
}

export { studentsRoot, studentsList, addStudent, updateStudent, deleteStudent };