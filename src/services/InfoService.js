import axios from 'axios'

export class InfoService {
    constructor(http) {
        this.http = http
    }
    getPersonsAtPage(page) {
        return axios
            .get(this.http + 'api/character/?page=' + page)
            .then(res => res.data.results)
            .catch(err => {
                throw new Error(err)
            })
    }
}
