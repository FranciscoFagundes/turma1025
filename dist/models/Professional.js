"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Professional extends Person_1.default {
    constructor(role, shift, sector, id, name, birthday, address) {
        super(id, name, birthday, address);
        this.role = role;
        this.shift = shift;
        this.sector = sector;
    }
}
exports.default = Professional;
