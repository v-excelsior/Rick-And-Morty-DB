<template>
    <header >
        <b-navbar type="dark" variant="dark" fixed="top" active="true">
            <b-navbar-nav class="container  align-items-stretch w-100 p-0 pl-sm-3 pr-sm-2">
                <b-navbar-brand class="d-none d-sm-block">
                    Rick and Morty DB
                </b-navbar-brand>
                <b-nav-item to="/dist" exact active-class="link-active"
                    >Main</b-nav-item
                >
                <b-nav-item to="/dist/RandomPerson" active-class="link-active"
                    >Random</b-nav-item
                >
                <b-nav-item to="/dist/SearchPage" active-class="link-active"
                    >Search</b-nav-item
                >
                <b-nav-item
                    href="https://github.com/vakyla98/Rick-And-Morty-DB"
                    class="ml-auto"
                    active-class="link-active"
                    >Repo</b-nav-item
                >
            </b-navbar-nav>
        </b-navbar>
    </header>
</template>

<script>
import {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarBrand,
    BNavbarToggle,
} from 'bootstrap-vue'
export default {
    name: 'HeaderComponent',
    components: {
        BNavbar,
        BNavbarNav,
        BNavbarBrand,
        BNavItem,
        BNavbarToggle,
    },
}
</script>
<style lang="scss">
.link-active {
    &::after {
        display: block;
        content: '';
        height: 2px;
        width: 100%;
        background-color: #6c757d;
    }
}
</style>
