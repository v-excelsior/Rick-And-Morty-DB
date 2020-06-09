<template>
    <div>
        <HeaderComponent />
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view />
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    name: 'App',
    components: {
        HeaderComponent,
    },
    watch: {
        $route(to, from) {
            if (this.$route.path === '/dist/RandomPage') {
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = ''
            }
        },
    },
}
</script>
