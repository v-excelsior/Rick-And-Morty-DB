import { mount } from '@vue/test-utils'

import PersonCard from '../components/PersonCard.vue'

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

describe('Person card', () => {
    let item
    beforeEach(() => {
        item = mount(PersonCard, {
            propsData: { person },
        })
    })

    it('render correctly', () => {
        expect(item.exists()).toBe(true)
    })
    it('emit changing active card', () => {
        let card = item.find('.person-card')
        card.trigger('click')
        expect(item.emitted().newActive).toBeTruthy()
    })
})
