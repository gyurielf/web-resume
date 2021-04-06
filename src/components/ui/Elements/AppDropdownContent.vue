<template>
    <div class="flip-box" :style="{ opacity: isActive ? '1' : '0' }">
        <transition name="dropdown">
            <slot v-if="isActive" />
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
    /*opacity: 0;*/
    pointer-events: none;
    transform: translateX(-50%) rotateX(-15deg);
}

.dropdown-enter-active {
    transition: 3s;
    transition-property: opacity, transform;
    will-change: transform, opacity;
    transform-origin: 50% -50px;
}

.dropdown-enter-to {
    pointer-events: auto;
    transform: translateX(-50%) rotateX(0);
    /*opacity: 1;*/
}

.dropdown-leave-from {
    pointer-events: auto;
    transform: translateX(-50%) rotateX(0);
    /*opacity: 1;*/
}

.dropdown-leave-active {
    transition: 3s;
    transition-property: opacity, transform;
    will-change: transform, opacity;
    transform-origin: 50% -50px;
}

.dropdown-leave-to {
    /*opacity: 0;*/
    pointer-events: none;
    transform: translateX(-50%) rotateX(-15deg);
}
</style>
