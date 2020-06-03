<template>
    <div class="container">
        <div class="control-wrapper">
            <button class="button button_custom" @click="changePage('prev')">
                Prev
            </button>
            <button class="button button_custom" @click="changePage('next')">
                Next
            </button>
        </div>
        <div
            class="d-block d-md-flex align-items-start flex-column flex-md-row"
        >
            <active-card
                v-if="activePerson.name"
                :person="activePerson"
                class="d-flex d-md-block"
            />
            <div class="list" v-if="personsAtPage.length">
                <person-card
                    class="list__card"
                    v-for="person in personsAtPage"
                    :person="person"
                    :key="person.id"
                    @newActive="activePerson = $event"
                />
            </div>
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

<style lang="scss">
.control-wrapper {
    display: flex;
}
.button {
    flex: 1 1 auto;
    border: none;
    outline: none;
    height: 40px;
}
.list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}
</style>
