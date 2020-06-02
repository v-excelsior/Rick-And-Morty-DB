<template>
    <div class="main">
        <h1 class="header">
            Random Person
        </h1>

        <b-button size="sm" @click="getRandomPerson()" variant="outline-dark">Random</b-button>
        <div class="active-person" v-if="randomPerson.name">
            <ActiveCard :person="randomPerson" />
        </div>
    </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import { infoService } from '../services'
import ActiveCard from '../components/ActiveCard.vue'
export default {
    name: 'RandomPerson',
    components: {
        ActiveCard,
        BButton
    },
    data() {
        return {
            randomPerson: {},
        }
    },
    props: {
        title: String,
    },
    methods: {
        async getRandomPerson() {
            let id = Math.round(Math.random() * (591 - 1) + 1)
            this.randomPerson = await infoService.getPersonsById(id)
        },
    },
    beforeMount() {
        this.getRandomPerson()
    },
}
</script>

<style></style>
