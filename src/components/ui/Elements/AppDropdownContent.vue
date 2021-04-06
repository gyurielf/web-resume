<template>
    <div
        class="SiteHeader__menuContainer"
        :style="{ opacity: isActive ? '1' : '0' }"
    >
        <div
            class="SiteMenu SiteHeader__menu pou"
            :style="[activeClass]"
            :hidden="!isActive"
        >
            <slot />
        </div>
        <!--  <transition name="dropdown">
            <slot v-if="isActive" />
        </transition>-->
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

        const activeClass = computed(() => {
            if (isActive.value) {
                return 'pointer-events: auto';
            } else {
                return 'pointer-events: none';
            }
        });

        return {
            isActive,
            activeClass
        };
    }
};
</script>

<style scoped>
.dropdown-enter-from {
    --siteMenuRotateX: -15deg;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: 250ms;
    transition-property: transform, width, height;
    will-change: transform, width, height;
}

.dropdown-enter-to {
    --siteMenuRotateX: 0deg;
}

.dropdown-leave-from {
    --siteMenuRotateX: 0deg;
}

.dropdown-leave-to {
    --siteMenuRotateX: -15deg;
}
</style>
