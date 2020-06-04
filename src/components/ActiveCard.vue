<template>
    <transition name="fade" mode="out-in">
        <div class="active-person p-2 text-white bg-dark">
            <img class="active-person__image" :src="person.image" />
            <div class="active-person__info">
                <p class="active-person__name bold mt-2 mb-2">
                    {{ person.name }}
                </p>
                <p class="active-person__text active-person__status" >
                    <span
                        class="active-person__status-icon"
                        ref="statusIcon"
                    ></span>
                    {{ person.status }} &mdash; {{ person.species }}
                </p>
                <p class="active-person__text" v-if="person.type != ''">
                    <span>Type : </span>{{ person.type }}
                </p>
                <p class="active-person__text">
                    <span>Gender : </span>{{ person.gender }}
                </p>
                <p class="active-person__text">
                    <span>Location : </span>{{ person.location.name }}
                </p>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'ActiveCard',
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    methods: {
        pickStatusColor() {
            if (this.person.status == 'Alive') {
                this.$refs.statusIcon.style.backgroundColor = 'rgb(85, 204, 68)'
            } else if (this.person.status == 'Dead') {
                this.$refs.statusIcon.style.backgroundColor = 'rgb(214, 61, 46)'
            } else {
                this.$refs.statusIcon.style.backgroundColor =
                    'rgb(158, 158, 158)'
            }
        },
    },
    mounted() {
        this.pickStatusColor()
    },
    watch: {
        person() {
            deep: true
            handler: this.pickStatusColor()
        },
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
.active-person {
    border-radius: 10px;
    font-size: 14px;
    &__info {
        width: 100%;
    }
    &__status {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        &-icon {
            height: 0.5rem;
            width: 0.5rem;
            margin-right: 0.375rem;
            border-radius: 50%;
        }
    }
    &__name {
        font-size: 18px;
    }
    &__text {
        margin: 0;
    }
    &__image {
        border-radius: 5px;
        width: 100%;
    }
}
@media (max-width: 991px) {
    .active-person {
        &__image {
            object-fit: contain;
            border-radius: 5px;
            height: auto;
        }
    }
}
@media (max-width: 767px) {
    .active-person {
        &__image {
            width: 160px;
        }
        &__info {
            padding: 0 10px;
        }
    }
}
@media (max-width: 480px) {
    .active-person__image {
        width: 120px;
    }
    .active-person {
        font-size: 12px;
        &__info {
            height: 120px;

            overflow-y: scroll;
        }
    }
}
</style>
