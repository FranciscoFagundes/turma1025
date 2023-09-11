"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentsRouter_1 = __importDefault(require("../routes/studentsRouter"));
const cors_1 = __importDefault(require("cors"));
const professionalsRouter_1 = __importDefault(require("../routes/professionalsRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("<h3 style='color: blue'>Hello World</h3>");
});
app.use("/students", studentsRouter_1.default);
app.use("/professionals", professionalsRouter_1.default);
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
