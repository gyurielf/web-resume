<template>
    <div
        v-if="dropdownType === 'hover'"
        @mouseenter="openDropDown"
        @mouseleave="closeDropdown"
    >
        <button
            :type="type"
            :aria-expanded="sharedState.active"
            :class="[slotClass, activeClass]"
        >
            <slot name="dropDownToggler"></slot>
        </button>
        <slot />
    </div>
    <!--    <div
        v-if="dropdownType === 'hover'"
        @mouseenter="openDropDown"
        @mouseleave="closeDropdown"
        class="menuClass"
    >
        <slot name="dropDownToggler"></slot>
        <slot />
    </div>-->
    <div v-else v-click-outside="closeDropdown">
        <button
            :type="type"
            :aria-expanded="sharedState.active"
            :class="[slotClass, activeClass]"
            @click="toggleDropDown"
        >
            <slot name="dropDownToggler"></slot>
        </button>
        <slot />
    </div>
    <!--    <div v-else @click="toggleDropDown">
        <div v-click-outside="closeDropdown">
            <slot name="dropDownToggler"></slot>
        </div>
        <slot />
    </div>-->
</template>

<script>
import { computed, provide, reactive } from 'vue';

export default {
    name: 'AppDropdown',
    props: ['dropdownType', 'type', 'slotClass'],
    setup() {
        const sharedState = reactive({
            active: false
        });

        provide('sharedState', sharedState);

        const activeClass = computed(() => {
            if (sharedState.active === true) {
                return 'dark:bg-gray-700';
            } else {
                return 'dark:bg-gray-800';
            }
        });

        const toggleDropDown = () => (sharedState.active = !sharedState.active);
        const openDropDown = () => (sharedState.active = true);
        const closeDropdown = () => (sharedState.active = false);

        return {
            toggleDropDown,
            openDropDown,
            closeDropdown,
            sharedState,
            activeClass
        };
    }
};
</script>

<style scoped></style>
