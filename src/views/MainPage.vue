<template>
    <div class="container">
        <div class="control-wrapper mt-3 mb-2">
            <button class="button button-half" @click="pageNumber--">
                Prev
            </button>
            <input
                type="number"
                class="page-number text-center mx-2 bg-dark text-light"
                v-model.lazy="pageNumber"
            />
            <button class="button button-half" @click="pageNumber++">
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
            pageNumber: 1, // that because input[type=number] return a string anyway
        }
    },
    props: {
        title: String,
    },
    methods: {
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
            if (this.pageNumber === '') this.pageNumber = 1
            if (this.pageNumber > 30) this.pageNumber = 1
            if (this.pageNumber < 1) this.pageNumber = 30
            this.getInfo()
        },
    },
}
</script>
