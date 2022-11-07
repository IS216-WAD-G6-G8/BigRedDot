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
export class UserService {
    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/users';
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUserUrl = this.baseUrl + '/' + user.uid + '.json';
            const tempUserEntity = {
                uid: user.uid,
                name: user.displayName,
            };
            try {
                let res = yield axios.put(createUserUrl, tempUserEntity);
                console.log(res);
            }
            catch (err) {
                throw err;
            }
        });
    }
    createUserFromEmail(uid, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUserUrl = this.baseUrl + '/' + uid + '.json';
            const tempUserEntity = {
                uid: uid,
                name: name,
            };
            try {
                let res = yield axios.put(createUserUrl, tempUserEntity);
                console.log(res);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
