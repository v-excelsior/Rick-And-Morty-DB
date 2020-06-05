<template>
    <div class="container">
        <b-form
            @submit.prevent=""
            class="search-form d-flex flex-column flex-md-row mb-3 mt-3"
        >
            <div class="wrapper wrapper-input">
                <label class="mb-0 input p-1" for="input-name"
                    >Character name:<b-form-input
                        v-model.lazy="characterName"
                        id="input-name"
                        trim
                        lazy
                        size="sm"
                        placeholder="Enter name here"
                    ></b-form-input
                ></label>
            </div>
            <div class="wrapper wrapper-select d-flex">
                <label class="mb-0 input p-1" for="select-status"
                    >Status:<b-form-select
                        id="select-status"
                        v-model="selected.status"
                        :options="statusOptions"
                        size="sm"
                    ></b-form-select
                ></label>

                <label class="mb-0 input p-1" for="select-gender"
                    >Gender:
                    <b-form-select
                        id="select-gender"
                        v-model="selected.gender"
                        :options="genderOptions"
                        size="sm"
                    ></b-form-select
                ></label>
            </div>
        </b-form>
        <transition name="fade" mode="out-in">
            <div
                class="d-block d-md-flex align-items-start flex-column flex-md-row p-1"
                :key="filter"
            >
                <active-card
                    v-if="foundPeople.length"
                    :person="activePerson"
                    class="d-flex flex-row flex-md-column m-0 mb-2 mr-md-2"
                />
                <p v-else class="text-center w-100 mt-2 mt-lg-5">
                    No characters with this parameters
                </p>
                <div class="grid" v-if="foundPeople.length">
                    <person-card
                        v-for="person in foundPeople"
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
import { BForm, BFormInput, BFormSelect } from 'bootstrap-vue'
export default {
    name: 'SearchPage',
    components: {
        PersonCard,
        ActiveCard,
        BForm,
        BFormInput,
        BFormSelect,
    },
    data() {
        return {
            selected: { status: null, gender: null },
            characterName: '',
            foundPeople: [],
            activePerson: {},
            statusOptions: [
                { value: null, text: '' },
                { value: 'alive', text: 'Alive' },
                { value: 'dead', text: 'Dead' },
                { value: 'unknown', text: 'Unknown' },
            ],
            genderOptions: [
                { value: null, text: '' },
                { value: 'female', text: 'Female' },
                { value: 'male', text: 'Male' },
                { value: 'genderless', text: 'Genderless' },
                { value: 'unknown', text: 'Unknown' },
            ],
        }
    },
    computed: {
        filter() {
            let parameters = [this.characterName]
            if (this.selected.status) {
                parameters.push('status=' + this.selected.status)
            }
            if (this.selected.gender) {
                parameters.push('gender=' + this.selected.gender)
            }
            return parameters.join('&')
        },
        searchParameters() {
            const { characterName, selected } = this
            return { characterName, selected }
        },
    },
    methods: {
        async search(filter) {
            try {
                let data = await infoService.search(filter)
                this.foundPeople = data
                this.activePerson = this.foundPeople[0]
            } catch (err) {
                console.log(err)
                this.foundPeople = []
            }
        },
    },
    beforeMount() {
        this.search('j')
    },
    watch: {
        searchParameters: {
            deep: true,
            handler() {
                this.search(this.filter)
            },
        },
    },
}
</script>
