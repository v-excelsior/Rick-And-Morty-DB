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
.button {
    border: none;
    outline: none;
    height: 40px;
    color: white;
    transition: 0.3s;
    background-color: #343a40;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: lighten($color: #343a40, $amount: 10%);
    }
    &-half {
        width: calc(50% - 20px);
    }
    &-full {
        width: 100%;
    }
}
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
