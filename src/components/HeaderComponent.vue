<template>
    <header>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav class="d-flex w-100">
                <b-nav-item to="/dist">Main</b-nav-item>
                <b-nav-item to="/dist/RandomPerson">Random</b-nav-item>
                <b-nav-item to="/dist/SearchPage">Search</b-nav-item>
                <b-nav-item
                    href="https://github.com/vakyla98/Rick-And-Morty-DB"
                    class="ml-auto"
                    >Repo</b-nav-item
                >
            </b-navbar-nav>
        </b-navbar>
    </header>
</template>

<script>
import { BNavbar, BNavbarNav, BNavItem } from 'bootstrap-vue'
export default {
    name: 'HeaderComponent',
    components: {
        BNavbar,
        BNavbarNav,
        BNavItem,
    },
}
</script>
<style></style>
