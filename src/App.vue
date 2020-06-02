<template>
    <div>
        <router-link to="/dist/RandomPerson">Random</router-link>
        <router-link to="/dist">Main</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
<style lang="scss"></style>
