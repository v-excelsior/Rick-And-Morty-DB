<template>
    <transition name="fade" mode="out-in">
        <div class="active-person p-2 text-white bg-dark">
            <img class="active-person__image" :src="person.image" />
            <div class="active-person__info">
                <p class="active-person__name bold mt-0 mt-md-2 mb-2">
                    {{ person.name }}
                </p>
                <p class="active-person__text active-person__status">
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
            this.$refs.statusIcon.classList.remove('alive', 'dead', 'unknown')
            if (this.person.status == 'Alive') {
                this.$refs.statusIcon.classList.add('alive')
            } else if (this.person.status == 'Dead') {
                this.$refs.statusIcon.classList.add('dead')
            } else {
                this.$refs.statusIcon.classList.add('unknown')
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
