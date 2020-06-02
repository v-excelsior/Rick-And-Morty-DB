<template>
    <div>
        <p class="active-person__name">{{ person.name }}</p>
        <img class="active-person__image" :src="person.image" />
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
