<template>
    <!--    <form class="language">
        <label>{{ t('labels.language') }}</label>
        -->
    <div
        v-click-outside="closeDropdown"
        class="relative inline-block text-left mr-2"
    >
        <div>
            <button
                type="button"
                class="inline-flex justify-center w-full dark:border-gray-700 hover:shadow-sm hover:bg-gray-200 rounded-md px-4 py-2 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent text-sm text-gray-500 dark:active:bg-black"
                :class="{ active: dropDownIsActive }"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                @click="toggleDropDown"
            >
                {{ currentLocale.toUpperCase() }}
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    :aria-hidden="dropDownIsActive"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>

        <transition name="dropdown">
            <div v-show="dropDownIsActive">
                <div
                    class="origin-top-right absolute right-0 mt-2 px-2 rounded-md shadow-lg
                    bg-gray-100 dark:border-gray-600 dark:bg-gray-700
                    ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div class="py-1" role="none">
                        <a
                            href="#"
                            class="block px-4 rounded-md text-sm py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                            role="menuitem"
                            v-for="optionLocale in supportLocales"
                            :key="optionLocale"
                            :value="optionLocale"
                            @click="currentLocale = optionLocale"
                        >
                            {{ optionLocale.toUpperCase() }}
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { inject, ref, watch } from 'vue';

export default {
    name: 'LanguageSelector',
    setup() {
        // const currentLocale = inject('currentLocale');
        const dropDownIsActive = ref(false);

        const toggleDropDown = () => {
            dropDownIsActive.value = !dropDownIsActive.value;
        };

        const closeDropdown = () => (dropDownIsActive.value = false);
        const currentLocale = inject('currentLocale');

        watch(currentLocale, () => {
            closeDropdown();
        });

        return {
            currentLocale,
            t: inject('t'),
            supportLocales: inject('supportLocales'),
            dropDownIsActive,
            toggleDropDown,
            closeDropdown
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
