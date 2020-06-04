<template>
    <b-card
        @click="$emit('newActive', person)"
        class="person-card  text-white"
        :img-src="person.image"
        img-top
    >
        <p class="d-none d-sm-block  person-card__name m-0 text-center ">
            {{ person.name }}
        </p>
    </b-card>
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
</style>
