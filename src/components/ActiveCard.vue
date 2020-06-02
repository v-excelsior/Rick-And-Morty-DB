<template>
    <div>
        <p class="active-person__name">{{ person.name }}</p>
        <img class="active-person__image" :src="person.image" />
        <p>Status: {{ person.status }}</p>
        <p>Species: {{ person.species }}</p>
        <p v-if="person.type.length">{{ person.type }}</p>
        <p>Gender: {{ person.gender }}</p>
        <p>Location{{ person.location.name }}</p>
    </div>
</template>
<script>
export default {
    name: 'ActiveCard',
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
}
</script>
