import axios from 'axios'
import { MultiFactorInfo } from 'firebase/auth'

export class UserService {
    baseUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/users'
    }

    async createUser(user: MultiFactorInfo) {
        console.log(user)
        const tempUserEntity = {
            uid: user.uid,
            name: user.displayName,
        }
        const createUserUrl = this.baseUrl + user.uid + '.json'
        try {
            let res = await axios.put(createUserUrl, { tempUserEntity })
            console.log(res)
        } catch (err) {
            throw err
        }
    }
}
