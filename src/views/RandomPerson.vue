<template>
    <div class="main">
        <h1 class="header">
            Random Person
        </h1>
        <button @click="getRandomPerson()">Random</button>
        <ActiveCard :person="randomPerson" />
    </div>
</template>

<script>
import { infoService } from '../services'
import ActiveCard from '../components/ActiveCard.vue'
export default {
    name: 'RandomPerson',
    components: {
        ActiveCard,
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
        //this.getTest()
        this.getRandomPerson()
    },
}
</script>

<style></style>
