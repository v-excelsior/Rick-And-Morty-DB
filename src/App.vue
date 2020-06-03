<template>
    <div>
        <HeaderComponent />
        <transition name="fade">
            <router-view />
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
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    position: absolute;
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
