"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scraping_controller_1 = require("./controllers/scraping.controller");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/test', (_req, res) => {
    console.log('Testing---');
    res.send('test');
});
app.get('/scrap', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Scraping---');
    (0, scraping_controller_1.scraping)(_req, res);
}));
app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});
