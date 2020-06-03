<template>
    <div v-on:click="$emit('newActive', person)" class="person-card">
        <b-card :img-src="person.image" img-top tag="article">
            <p class="d-none d-sm-block  person-card__name m-0 text-center ">
                {{ person.name }}
            </p>
        </b-card>
    </div>
</template>

<script>
import { BCard } from 'bootstrap-vue'
export default {
    name: 'PersonCard',
    components: {
        BCard,
    },
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style lang="scss">
@import '@/styles/modules/PersonCard.scss';
.card-body {
    padding: 3px;
}
</style>
