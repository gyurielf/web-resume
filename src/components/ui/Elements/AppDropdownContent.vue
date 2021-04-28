<template>
    <div>
        <!--        <div :hidden="!isActive">
            <transition name="dropdown">
                <div v-if="isActive">
                    <slot />
                </div>
            </transition>
        </div>-->
        <transition name="dropdown">
            <div v-if="isActive">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    name: 'AppDropdownContent',
    setup() {
        const sharedState = inject('sharedState');

        const isActive = computed(() => {
            return sharedState.active;
        });

        return {
            isActive
        };
    }
};
</script>

<style scoped>
.dropdown-enter-from {
    opacity: 0;
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
}

.dropdown-enter-active {
    transition: ease-out 0.075s;
}

.dropdown-enter-to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.dropdown-leave-from {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.dropdown-leave-active {
    transition: ease-in 0.075s;
}

.dropdown-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
}
</style>
