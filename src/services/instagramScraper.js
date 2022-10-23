import { instagram } from 'instagram-scraper-api';
export class InstagramService {
    getPostsByUsername(username) {
        instagram.user(username)
            .then((user) => { return user; })
            .catch((err) => console.log(err));
    }
}
