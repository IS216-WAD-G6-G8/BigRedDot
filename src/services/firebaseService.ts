import axios from 'axios'
import { Business, CategoryEnum } from '../types/firebaseTypes'

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

    async getDataByCategory(
        categories: CategoryEnum[]
    ): Promise<void | Business[]> {
        var matchCategories = Object.values(categories)

        try {
            let res = await axios.get(this.baseUrl)
            let data = res.data

            let retData = data.filter((business: Business) => {
                return matchCategories.includes(business.category)
            })
            return retData
        } catch (err) {
            throw err
        }
    }

    async getDataByID(
        id: Number
    ): Promise<void | Business[]> {
        try {
            let res = await axios.get(this.baseUrl)
            let data = res.data
            let retData = data.filter((business: Business) => {
                return business.id == id
            })
            return retData
        } catch (err) {
            throw err
        }
    }

}


