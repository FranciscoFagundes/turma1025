import express from "express";
import dotenv from "dotenv";
import studentsRouter from "../routes/studentsRouter";
import cors from "cors";
import { createDbConnection, insertData, receiveData } from "../db/dbConfig";

dotenv.config();

createDbConnection();
insertData();
receiveData();

const app = express();
const port = process.env.PORT;
app.use(cors());



app.get("/", (req, res) => {
    res.send("<h3 style='color: blue'>Hello World</h3>");
});

app.use("/students", studentsRouter);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})
