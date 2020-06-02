<template>
    <div class="main">
        <h1 class="header">
            Rick and Morty DB
        </h1>
        <button @click="changePage('next')">Next</button>
        <button @click="changePage('prev')">Prev</button>
        <div class="list" v-if="personsAtPage.length">
            <PersonCard
                class="list__card"
                v-for="person in personsAtPage"
                :person="person"
                :key="person.id"
                @newActive="activePerson = $event"
            />
        </div>
        <div class="active-person" v-if="personsAtPage.length">
            <ActiveCard :person="activePerson" />
        </div>
    </div>
</template>

<script>
import { infoService } from '../services'
import PersonCard from './PersonCard.vue'
import ActiveCard from './ActiveCard.vue'
export default {
    name: 'MainPage',
    components: {
        PersonCard,
        ActiveCard,
    },
    data() {
        return {
            personsAtPage: [],
            activePerson: {},
            pageNumber: 1,
        }
    },
    props: {
        title: String,
    },
    methods: {
        changePage(value) {
            console.log(value)
            if ((value === 'next')) {
                this.pageNumber === 30 ? (this.pageNumber = 1) : this.pageNumber++
            } else {
                this.pageNumber === 1 ? (this.pageNumber = 30) : this.pageNumber--
            }
        },
        async getInfo() {
            this.personsAtPage = await infoService.getPersonsAtPage(
                this.pageNumber
            )
            this.activePerson = this.personsAtPage[0]
        },
    },
    beforeMount() {
        this.getInfo()
    },
    watch: {
        pageNumber() {
            this.getInfo()
            console.log(this.pageNumber)
        },
    },
}
</script>

<style>
.center {
    text-align: center;
}
</style>
