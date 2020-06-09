import { mount } from '@vue/test-utils'

import ActiveCard from '../components/ActiveCard.vue'

import Vue from 'vue'

const person = {
    id: 174,
    name: 'Jerry 5-126',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    location: {
        name: 'Jerryboree',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/174.jpeg',
}

describe('Active card', () => {
    let item
    beforeEach(() => {
        item = mount(ActiveCard, {
            propsData: { person },
        })
    })

    it('render correctly', () => {
        expect(item.exists()).toBe(true)
    })
    it('status handling correstly', () => {
        expect(item.find('.active-person__status-icon').classes())
            .toEqual(["active-person__status-icon", "alive"])
        //not toHave to test is havent dead/unknown classes'
    })
})
