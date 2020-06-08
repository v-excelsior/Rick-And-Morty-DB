import { mount } from '@vue/test-utils'
import mockAxios from 'axios'
import { infoService } from '../services'

const person1 = {
    id: 1,
    name: 'Jerry',
    status: 'Alive',
    gender: 'Male',
}
const person2 = {
    id: 2,
    name: 'Lucy',
    status: 'Dead',
    gender: 'Female',
}

const persons = [person1, person2]



describe('Info servises', () => {
    it('Get persons by Id', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: person1
            })
        )
        const personById = await infoService.getPersonsById(1)

        expect(personById).toEqual({
            id: 1,
            name: 'Jerry',
            status: 'Alive',
            gender: 'Male',
        })
        expect(mockAxios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1')
    })

    it('Get persons by page', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: persons
                }
            })
        )
        const personsAtPage = await infoService.getPersonsAtPage(22)
        expect(personsAtPage).toEqual([{
            id: 1, name: 'Jerry',
            status: 'Alive', gender: 'Male',
        }, {
            id: 2, name: 'Lucy',
            status: 'Dead', gender: 'Female',
        }])
        expect(mockAxios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?page=22')
    })
    it('Search', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: persons
                }
            })
        )
        const searchByFilters = await infoService.search('ANYNAME&status=ANY&gender=ANY')

        expect(searchByFilters).toEqual([{
            id: 1, name: 'Jerry',
            status: 'Alive', gender: 'Male',
        }, {
            id: 2, name: 'Lucy',
            status: 'Dead', gender: 'Female',
        }])
        expect(mockAxios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?name=ANYNAME&status=ANY&gender=ANY')
    })
})
