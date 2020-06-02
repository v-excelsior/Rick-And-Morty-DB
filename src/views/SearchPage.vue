<template>
    <div class="main">
        <h1 class="header">
            Search
        </h1>
        <div class="list" v-if="personsAtPage.length">
            <PersonCard
                class="list__card"
                v-for="person in foundPeople"
                :person="person"
                :key="person.id"
                @newActive="activePerson = $event"
            />
        </div>
        <div class="active-person" v-if="activePerson.name">
            <ActiveCard :person="activePerson" />
        </div>
    </div>
</template>

<script>
import { infoService } from '../services'
import PersonCard from '../components/PersonCard.vue'
import ActiveCard from '../components/ActiveCard.vue'
export default {
    name: 'MainPage',
    components: {
        PersonCard,
        ActiveCard,
    },
    data() {
        return {
            foundPeople: [],
            activePerson: {},
        }
    },
    props: {
        title: String,
    },
    computed:{
        filter(){
            
            return 
        }
    },
    methods: {
        async search(filter) {
            this.personsAtPage = await infoService.search(filter)
            this.activePerson = this.personsAtPage[0]
        },
    },
    beforeMount() {
        this.search(filter)
    },
    watch: {},
}
</script>

<style></style>
