import { Response, Request } from "express";
import Student from "../models/Student";
import { insertData, receiveData } from "../db/dbConfig";


const studentsArray: Student[] = [
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

]

const studentsRoot = (req: Request, res: Response) => {
    res.send("Página Inicial Students");
}

const studentsList =  (req: Request, res: Response) => {
    receiveData();
    res.end();
}

const addStudent = (req: Request, res: Response) => {
    // let name = req.body.name;
    // let shift = req.body.shift;
    // let year = req.body.year;
    // let room = req.body.room;
    // console.log(req.body);
    let student: Student = req.body;

    insertData(student);

   res.send("Student Added");
}

const updateStudent = (req: Request, res: Response) => {
    res.send("Student Updated");
}

const deleteStudent =  (req: Request, res: Response) => {
    res.send("Student Deleted");
}

export {  studentsRoot, studentsList, addStudent, updateStudent, deleteStudent };