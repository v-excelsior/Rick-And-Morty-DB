<template>
    <div>
        <HeaderComponent />
        <div class="spacer"></div>
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
.spacer {
    height: 58px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.container-mine{
    max-width: 1280px;
    margin:0 auto;
}
</style>
