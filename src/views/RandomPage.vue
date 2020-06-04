<template>
    <div class="container">
        <b-button size="sm" @click="getRandomPerson()" variant="outline-dark"
            >Random</b-button
        >
        <transition name="fade" mode="out-in">
            <div class="active-person " v-if="randomPerson.name" :key="randomPerson.name">
                <ActiveCard :person="randomPerson" class="d-block d-md-flex"/>
            </div>
        </transition>
    </div>
</template>

<script>
import { infoService } from '../services'
import { BButton } from 'bootstrap-vue'
import ActiveCard from '../components/ActiveCard.vue'
export default {
    name: 'RandomPage',
    components: {
        ActiveCard,
        BButton,
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
<style lang="scss">
.custom-container {
    display: flex;
    margin: 0 auto;
}

</style>
