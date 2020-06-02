<template>
    <div v-on:click="$emit('newActive',person)">
        <p class="card-name">{{ person.name }}</p>
        <img class="card-image" :src="person.image" />
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
