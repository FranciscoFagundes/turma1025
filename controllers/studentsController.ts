import { Response, Request } from "express";
import Student from "../models/Student";


const studentsRoot = (req: Request, res: Response) => {
    res.send("Página Inicial Students");
}

const studentsList =  (req: Request, res: Response) => {
    res.end();
}

const addStudent = (req: Request, res: Response) => {
   res.send("Student Added");
}

const updateStudent = (req: Request, res: Response) => {
    res.send("Student Updated");
}

const deleteStudent =  (req: Request, res: Response) => {
    res.send("Student Deleted");
}

export {  studentsRoot, studentsList, addStudent, updateStudent, deleteStudent };