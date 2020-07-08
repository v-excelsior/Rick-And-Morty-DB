import axios from 'axios'

export class InfoService {
    constructor(http) {
        this.http = http
    }
    getPersonsAtPage(page) {
        return axios
            .get(this.http + '?page=' + page)
            .then(res => res.data.results)
    }
    getPersonsById(id) {
        return axios
            .get(this.http + id)
            .then(res => res.data)
    }
    async search(filter) {
        try {
            let responce = await axios
                .get(this.http + '?name=' + filter)
                .then(res => res.data.results)
            return responce
        }
        catch  {
            console.warn('[No characters with this options]')
            return []
        }
    }
}
