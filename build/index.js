"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3123;
app.use(express_1.default.json());
app.get('/test', (_req, res) => {
    console.log('Test');
    res.send('test');
});
app.listen(PORT, () => {
    console.log('Running on port ${PORT}');
});