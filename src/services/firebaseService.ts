import axios from 'axios'
import { Business } from '../types/firebaseTypes'

export class FirebaseService {
    baseUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/businesses.json'
    }

    async getAll(): Promise<void | Business[]> {
        try {
            let res = await axios.get(this.baseUrl)
            let data = res.data
            return data
        } catch (err) {
            throw err
        }
    }
}
