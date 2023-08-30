import { Router } from "express";
import {
    studentsRoot,
    studentsList,
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentsController";


const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

studentsRouter.get("/studentsList", studentsList);

studentsRouter.post("/addStudent", addStudent);

studentsRouter.put("/updateStudent", updateStudent);

studentsRouter.delete("/deleteStudent", deleteStudent);



export default studentsRouter;