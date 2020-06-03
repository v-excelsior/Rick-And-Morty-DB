<template>
    <div v-on:click="$emit('newActive', person)" class="person-card">
        <b-card :img-src="person.image" img-top tag="article">
            <b-card-text class="d-none d-sm-block  person-card__name m-0 text-center ">
                {{ person.name }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'PersonCard',
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    // created() {
    //     console.log(this.person)
    // },
}
</script>
<style lang="scss">
@import '@/styles/modules/PersonCard.scss';
.card-body {
    padding: 3px;
}
</style>
