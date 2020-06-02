<template>
    <div class="header">
        <h1>
            {{ title }}
        </h1>
        <div class="list" v-if="personsAtPage.length">
            <PersonCard v-for="person in personsAtPage" :person="person" :key="person.id" />
        </div>
        <hr />
        <div class="logo"></div>
    </div>
</template>

<script>
import { infoService } from '../services'
import PersonCard from './PersonCard.vue'
export default {
    name: 'MainPage',
    components: {
        PersonCard,
    },
    data() {
        return {
            personsAtPage: [],
        }
    },
    props: {
        title: String,
    },
    async beforeMount() {
        this.personsAtPage = await infoService.getPersonsAtPage(4)
    },
    watch: {
        personsAtPage() {
            console.log(this.personsAtPage)
        },
    },
}
</script>

<style>
.center {
    text-align: center;
}
</style>
