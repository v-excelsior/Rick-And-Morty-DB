<template>
    <div class="random-page p-2">
        <button class="button button-full mb-2" @click="getRandomPerson()">
            Random
        </button>
        <transition-group tag="div" name="fade" v-if="randomPersons.length">
            <ActiveCard
                v-for="person in randomPersons"
                :person="person"
                class="d-flex mb-2"
                :key="person.name"
            />
        </transition-group>
    </div>
</template>

<script>
import { infoService } from '../services'
import ActiveCard from '../components/ActiveCard.vue'
export default {
    name: 'RandomPage',
    components: {
        ActiveCard,
    },
    data() {
        return {
            randomPersons: [],
        }
    },
    props: {
        title: String,
    },
    methods: {
        async getRandomPerson() {
            let id = Math.round(Math.random() * (591 - 1) + 1)
            let current = await infoService.getPersonsById(id)
            this.randomPersons.unshift(current)
            if (this.randomPersons.length > 3) {
                console.log('cathc')
                setTimeout(() => {
                    this.randomPersons.pop()
                }, 300)
            }
        },
    },
    beforeMount() {
        this.getRandomPerson()
    },
    watch: {
        $route(to, from) {
            if (this.$route.path === '/dist/RandomPage') {
                console.log('foo')
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = ''
            }
        },
    },
}
</script>
<style lang="scss">
.random-page {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .active-person {
        &__image {
            max-width: 180px;
            margin-right: 20px;
        }
        &__name {
            margin-top: 0 !important;
        }
        &__info {
            padding: 0px;
        }
    }
}
</style>
