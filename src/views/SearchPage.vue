<template>
    <div class='container'>
        <b-form class="search-form mb-3 mt-3">
            <b-form-input
                v-model.lazy="characterName"
                :state="characterName.length ? null : false"
                trim
                lazy
                size="sm"
                placeholder="Enter name character"
            ></b-form-input>
            <b-form-select
                v-model="selected.status"
                :options="statusOptions"
                size="sm"
            ></b-form-select>
            <b-form-select
                v-model="selected.gender"
                :options="genderOptions"
                size="sm"
            ></b-form-select>
        </b-form>

        <div
            class="d-block d-md-flex align-items-start flex-column flex-md-row"
        >
            <active-card v-if="activePerson.name" :person="activePerson" class='d-flex d-md-block'/>
            <div class="list" v-if="foundPeople.length">
                <person-card
                    class="list__card"
                    v-for="person in foundPeople"
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
                { value: null, text: 'none' },
                { value: 'alive', text: 'Alive' },
                { value: 'dead', text: 'Dead' },
                { value: 'unknown', text: 'Unknown' },
            ],
            genderOptions: [
                { value: null, text: 'none' },
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
            this.foundPeople = await infoService.search(filter)
            this.activePerson = this.foundPeople[0]
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

<style lang="scss">
.search-form {
    display: flex;
    &__input {
        width: 100%; //bullshit
    }
}
</style>
