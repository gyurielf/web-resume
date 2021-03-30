<template>
    <div
        v-if="dropdownType === 'hover'"
        @mouseenter="openDropDown"
        @mouseleave="closeDropdown"
    >
        <slot name="dropDownToggler"></slot>
        <slot />
    </div>
    <div v-else @click="toggleDropDown">
        <div v-click-outside="closeDropdown">
            <slot name="dropDownToggler"></slot>
        </div>
        <slot />
    </div>
</template>

<script>
import { provide, reactive } from 'vue';

export default {
    name: 'AppDropdown',
    props: ['dropdownType'],
    setup() {
        const sharedState = reactive({
            active: false
        });

        provide('sharedState', sharedState);

        const toggleDropDown = () => (sharedState.active = !sharedState.active);
        const openDropDown = () => (sharedState.active = true);
        const closeDropdown = () => (sharedState.active = false);

        return {
            toggleDropDown,
            openDropDown,
            closeDropdown
        };
    }
};
</script>

<style scoped></style>
