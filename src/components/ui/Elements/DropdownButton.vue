<template>
    <slot @click="toggleDropDown" name="button"></slot>
    <div v-if="dropDownIsActive">
        <slot name="content"></slot>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'DropdownButton',
    setup() {
        const dropDownIsActive = ref(false);

        const toggleDropDown = () => {
            dropDownIsActive.value = !dropDownIsActive.value;
            console.log('kkk');
        };

        return {
            dropDownIsActive,
            toggleDropDown
        };
    }
};
</script>

<style scoped></style>
