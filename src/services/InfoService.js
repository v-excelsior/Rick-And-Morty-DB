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
    search(filter) {
        return axios
            .get(this.http + '?name=' + filter)
            .then(res => res.data.results)
    }
}
