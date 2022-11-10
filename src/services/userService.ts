import axios from 'axios'
import { MultiFactorInfo } from 'firebase/auth'

export class UserService {
    baseUrl: string

    constructor() {
        this.baseUrl =
            'https://is216-bigreddot-default-rtdb.asia-southeast1.firebasedatabase.app/users'
    }

    async createUser(user: MultiFactorInfo): Promise<void> {
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

    async createUserFromEmail(uid: string, name: string): Promise<void> {
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

    async getBookmarks(uid: string): Promise<void | number[]> {
        const getBookmarkUrl = this.baseUrl + '/' + uid + '/bookmarks.json'

        try {
            let res = await axios.get(getBookmarkUrl)
            let data = res.data
            return data
        } catch (err) {
            throw err
        }
    }

    async updateBookmarks(uid: string, bookmarks: number[]): Promise<void> {
        const updateBookmarkUrl = this.baseUrl + '/' + uid + '/bookmarks.json'

        try {
            let res = await axios.put(updateBookmarkUrl, bookmarks)
            console.log(res)
        } catch (err) {
            throw err
        }
    }

    async getRatings() {
        const getRatingsUrl = this.baseUrl + '/ratings.json'

        try {
            let res = await axios.get(getRatingsUrl)
            console.log(res)
        } catch (err) {
            throw err
        }
    }
}
