<template>
    <div>
        <p>{{person.name}}</p>
        <img :src="person.image">
    </div>
</template>

<script>
export default {
    name: 'PersonCard',
    props: {
        person: {
            type:Object,
            required:true
        }
    },
    created(){
        console.log(this.person)
    }
}
</script>
