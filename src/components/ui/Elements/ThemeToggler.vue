<template>
    <div
        class="relative col-start-1 col-end-4 px-4 sm:px-6 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-4 xl:col-end-3 row-start-1 row-end-2 xl:row-end-3 pb-8 lg:pb-11 xl:pb-0"
    >
        <div class="flex justify-center">
            <div class="flex items-center space-x-4">
                <svg width="32" height="32" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
                        fill="url(#paint0_linear)"
                    ></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="2"
                            y1="2"
                            x2="30"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop
                                class="transition-all duration-200"
                                stop-color="#d4d4d8"
                            ></stop>
                            <stop
                                class="transition-all duration-200"
                                offset="1"
                                stop-color="#d4d4d8"
                            ></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <label>
                    <button
                        :style="switchBgColor"
                        id="headlessui-switch-1"
                        role="switch"
                        tabindex="0"
                        class="flex items-center px-0.5 rounded-full w-18 h-9 transition-colors duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none"
                        :aria-checked="toggleActive"
                        @click="toggleTheme"
                    >
                        <span class="sr-only">Enable dark mode</span>

                        <input
                            type="checkbox"
                            :checked="toggleActive"
                            class="appearance-none bg-white rounded-full w-8 h-8
                        transform duration-300 ease-in-out cursor-pointer focus:outline-none"
                            :class="{
                                'translate-x-8.2': theme === 'dark'
                            }"
                            style="box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px, rgba(0, 0, 0, 0.1) 0px 1px 1px; transform-origin: 50% 50% 0px;"
                        />
                    </button>
                </label>
                <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="transition-colors duration-200 text-gray-900"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ThemeToggler',
    /*methods: {
        toggleTheme() {
            this.$store.dispatch('uiModule/toggleTheme');
        }
    },*/
    setup() {
        // Init VUEX store
        const store = useStore();
        const theme = computed(() => store.getters['uiModule/getTheme']);

        function toggleTheme() {
            store.dispatch('uiModule/toggleTheme');
        }
        const switchBgColor = computed(() => {
            if (theme.value === 'dark') {
                return 'background-color: rgb(17, 24, 39)';
            }
            return 'background-color:rgb(96, 211, 96)';
        });

        const toggleActive = computed(() => {
            if (theme.value === 'dark') {
                return true;
            }
            return false;
        });

        // const isChecked = ref(false);
        // onBeforeMount(() => {
        //     if (theme.value === 'dark') {
        //         isChecked.value = true;
        //     }
        // });

        return { theme, toggleTheme, toggleActive, switchBgColor };
    }
};
</script>

<style scoped></style>
