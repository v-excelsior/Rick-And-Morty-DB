<template>
    <MainPage :title="title" />
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
    name: 'App',
    components: {
        MainPage,
    },
    data() {
        return {
        }
    },
}
</script>
<style lang="scss">
</style>
