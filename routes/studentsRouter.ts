import { Router } from "express";
import {
    studentsRoot,
    studentsList,
    studentDetailsByQuery,
    studentDetailsByParams,
    addStudent,
    updateStudent,
    deleteStudent,
    studentsListByYearAndRoom
} from "../controllers/studentsController";


const studentsRouter = Router();

studentsRouter.get("/", studentsRoot);

studentsRouter.get("/studentsList", studentsList);

studentsRouter.get("/studentsListByYearAndRoom", studentsListByYearAndRoom);

studentsRouter.get("/studentDetails/", studentDetailsByQuery);

studentsRouter.get("/studentDetails/:id", studentDetailsByParams);

studentsRouter.post("/addStudent", addStudent);

studentsRouter.put("/updateStudent", updateStudent);

studentsRouter.delete("/deleteStudent", deleteStudent);



export default studentsRouter;