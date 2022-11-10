var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class FirebaseService {
    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/businesses.json';
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield axios.get(this.baseUrl);
                let data = res.data;
                console.log(data);
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
                let res = yield axios.get(this.baseUrl);
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
    getDataByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield axios.get(this.baseUrl);
                let data = res.data;
                let retData = data.filter((business) => {
                    return business.id == id;
                });
                return retData;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
