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
exports.FirebaseService = void 0;
const axios_1 = require("axios");
class FirebaseService {
    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/businesses.json';
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield axios_1.default.get(this.baseUrl);
                let data = res.data;
                return data;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getDataByCategory(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            var matchCategories = Object.values(categories);
            try {
                let res = yield axios_1.default.get(this.baseUrl);
                let data = res.data;
                let retData = data.filter((business) => {
                    return matchCategories.includes(business.category);
                });
                return retData;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.FirebaseService = FirebaseService;
