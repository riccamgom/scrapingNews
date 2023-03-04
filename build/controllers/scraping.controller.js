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
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraping = void 0;
const scraping_service_1 = require("../services/scraping.service");
const apiresponse_1 = require("../res/apiresponse");
function scraping(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const headlines = yield (0, scraping_service_1.scrapandStore)();
            res.status(200).json(apiresponse_1.apiResponseUtil.success(headlines));
        }
        catch (error) {
            console.error(error);
            res.status(500).json(apiresponse_1.apiResponseUtil.error('Internal server Error'));
        }
    });
}
exports.scraping = scraping;
