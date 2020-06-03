import axios from 'axios'

export class InfoService {
    constructor(http) {
        this.http = http
    }
    getPersonsAtPage(page) {
        return axios
            .get(this.http + '?page=' + page)
            .then(res => res.data.results)
            .catch(err => {
                throw new Error(err)
            })
    }
    getPersonsById(id) {
        return axios
            .get(this.http + id)
            .then(res => res.data)
            .catch(err => {
                throw new Error(err)
            })
    }
    search(filter){
        return axios
            .get(this.http + '?name=' + filter)
            .then(res => res.data.results)
            .catch(err => {
                throw new Error(err)
            })
    }
    // getTest(){
    //     return axios
    //         .get('https://rickandmortyapi.com/api/character/?name=r')
    //         .then(res => res.data.results)
    // }
}
