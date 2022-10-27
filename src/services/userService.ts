import axios from 'axios'
import { MultiFactorInfo } from 'firebase/auth'

export class UserService {
    baseUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
    }

    async createUser(user: MultiFactorInfo) {
        console.log(user)
        const tempUserEntity = {
            uid: user.uid,
            name: user.displayName,
        }
        try {
            let res = await axios.put(this.baseUrl, tempUserEntity)
            console.log(res)
        } catch (err) {
            throw err
        }
    }
}
