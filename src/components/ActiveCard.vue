<template>
    <div class="active-person">
        <img class="active-person__image" :src="person.image" />
        <div class="info-wrapper">
            <p class="active-person__name">{{ person.name }}</p>
            <p>Status: {{ person.status }}</p>
            <p>Species: {{ person.species }}</p>
            <p v-if="person.type != ''">Type: {{ person.type }}</p>
            <p>Gender: {{ person.gender }}</p>
            <p>Location: {{ person.location.name }}</p>
        </div>
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
<style lang='scss'>
.active-person__image{
        border-radius: 10px;
}
@media (max-width: 991px){
    .active-person__image{
        object-fit: contain;
        width:200px;
    }
}
</style>
