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

<style lang="scss">
.control-wrapper {
    display: flex;
    justify-content: space-between;
}
.button {
    border: none;
    outline: none;
    height: 40px;
    color: white;
    transition: 0.3s;
    background-color: #343a40;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: lighten($color: #343a40, $amount: 10%);
    }
    &-half {
        width: calc(50% - 20px);
    }
    &-full {
        width: 100%;
    }
}
.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}
</style>
