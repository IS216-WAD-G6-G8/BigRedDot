import axios from 'axios'
import { MultiFactorInfo } from 'firebase/auth'

export class UserService {
    baseUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/users'
    }

    async createUser(user: MultiFactorInfo) {
        const createUserUrl = this.baseUrl + '/' + user.uid + '.json'

        const tempUserEntity = {
            uid: user.uid,
            name: user.displayName,
        }
        try {
            let res = await axios.put(createUserUrl, tempUserEntity)
            console.log(res)
        } catch (err) {
            throw err
        }
    }

    async createUserFromEmail(uid: string, name: string) {
        const createUserUrl = this.baseUrl + '/' + uid + '.json'

        const tempUserEntity = {
            uid: uid,
            name: name,
        }
        try {
            let res = await axios.put(createUserUrl, tempUserEntity)
            console.log(res)
        } catch (err) {
            throw err
        }
    }

    async updateBookmarks(uid: string, bookmarks: number[]) {
        const createUserUrl = this.baseUrl + '/' + uid + '.json'

        try {
            let res = await axios.patch(createUserUrl, bookmarks)
            console.log(res)
        } catch (err) {
            throw err
        }
    }
}
