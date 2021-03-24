<template>
    <!--    <form class="language">
        <label>{{ t('labels.language') }}</label>
        <select
            v-model="currentLocale"
            class="rounded-md shadow-sm p-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none"
        >
            <option
                v-for="optionLocale in supportLocales"
                :key="optionLocale"
                :value="optionLocale"
                class="transform -translate-y-2"
            >
                {{ optionLocale }}
            </option>
        </select>
    </form>-->

    <div
        @focusout="dropDownIsActive = false"
        class="relative inline-block text-left"
    >
        <div>
            <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4
                py-2 bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                @click="toggleDropDown"
            >
                Options
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
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
            <div v-if="dropDownIsActive">
                <div
                    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg
                    bg-gray-200 dark:border-gray-600 dark:bg-gray-700
                    ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div class="py-1" role="none">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            v-for="optionLocale in supportLocales"
                            :key="optionLocale"
                            :value="optionLocale"
                        >
                            {{ optionLocale }}
                        </a>
                        <!--                        <form
                            method="POST"
                            action="#"
                            role="none"
                            @submit.prevent
                        >
                            <button
                                type="submit"
                                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Sign out
                            </button>
                        </form>-->
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// import { watch } from 'vue';

import { inject, ref } from 'vue';

export default {
    name: 'LanguageSelector',
    setup() {
        // const currentLocale = inject('currentLocale');
        const dropDownIsActive = ref(false);

        const toggleDropDown = () => {
            dropDownIsActive.value = !dropDownIsActive.value;
        };

        return {
            currentLocale: inject('currentLocale'),
            t: inject('t'),
            supportLocales: inject('supportLocales'),
            dropDownIsActive,
            toggleDropDown
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
