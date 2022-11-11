import axios from 'axios'
import { Business, CategoryEnum } from '../types/types'

export class FirebaseService {
    baseUrl: string
    businessUrl: string
    ratingUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app'
        this.businessUrl = this.baseUrl + '/businesses'
        this.ratingUrl = this.baseUrl + '/ratings.json'
    }

    async getAll(): Promise<void | Business[]> {
        try {
            let res = await axios.get(this.businessUrl + '.json')
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
            let res = await axios.get(this.businessUrl + '.json')
            let data = res.data

            let retData = data.filter((business: Business) => {
                return matchCategories.includes(business.category)
            })
            return retData
        } catch (err) {
            throw err
        }
    }

    async getDataByID(id: number): Promise<void | Business[]> {
        var getIdUrl = this.businessUrl + '/' + (id - 1) + '.json'

        try {
            let res = await axios.get(getIdUrl)
            let data = res.data
            return data
        } catch (err) {
            throw err
        }
    }

    async updateRating(
        bid: number,
        uid: string,
        name: string,
        rating: number,
        review: string
    ): Promise<void> {
        const updateRatingUrl =
            this.businessUrl + '/' + bid + '/ratings/' + uid + '.json'
        console.log(updateRatingUrl)

        const tempRatingEntity = {
            name: name,
            ratingscore: rating,
            reviewtext: review,
        }

        try {
            let res = await axios.put(updateRatingUrl, tempRatingEntity)
            console.log(res)
        } catch (err) {
            throw err
        }
    }
}
