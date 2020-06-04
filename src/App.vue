<template>
    <div>
        <HeaderComponent />
        <div class="spacer"></div>
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
}
</script>
<style lang="scss">
.spacer {
    height: 58px;
}
.fade-move {
  transition: transform 0.3s;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
