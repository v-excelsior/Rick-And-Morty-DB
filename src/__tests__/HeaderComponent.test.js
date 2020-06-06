import { mount } from '@vue/test-utils'
import HeaderComponent from '../components/HeaderComponent.vue'
import Vue from 'vue'

describe('Header component', () => {
    it('render correctly', () => {
        let item = mount(HeaderComponent, {})
        expect(item.exists()).toBe(true)
    })
})

