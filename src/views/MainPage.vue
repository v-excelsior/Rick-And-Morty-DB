<template>
    <div class="container">
        <div class="control-wrapper mt-3 mb-2">
            <button class="button button-half" @click="changePage('prev')">
                Prev
            </button>
            <span class="page align-self-center" v-text="pageNumber">
                {{ pageNumber }}
            </span>
            <button class="button button-half" @click="changePage('next')">
                Next
            </button>
        </div>
        <transition name="fade" mode="out-in">
            <div
                class="d-block d-md-flex align-items-start flex-column flex-md-row"
                :key="pageNumber"
            >
                <active-card
                    v-if="activePerson.name"
                    :person="activePerson"
                    class="d-flex flex-row flex-md-column m-0 mb-2 mr-md-2"
                />
                <div class="grid" v-if="personsAtPage.length">
                    <person-card
                        v-for="person in personsAtPage"
                        :person="person"
                        :key="person.id"
                        @newActive="activePerson = $event"
                    />
                </div>
            </div>
        </transition>
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
            if (value === 'next') {
                this.pageNumber === 30
                    ? (this.pageNumber = 1)
                    : this.pageNumber++
            } else {
                this.pageNumber === 1
                    ? (this.pageNumber = 30)
                    : this.pageNumber--
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
        },
    },
}
</script>