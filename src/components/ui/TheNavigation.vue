<template>
    <div class="relative top-0 w-full h-auto bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div
                class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
            >
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <router-link
                        :to="{
                            name: 'home',
                            params: {
                                locale: `${$i18n.locale}`
                            }
                        }"
                        active-class=""
                        exact-active-class=""
                    >
                        <span class="sr-only">{{ $t('brand') }}</span>
                        <h1 class="text-3xl dark:text-gray-200">
                            {{ $t('brand') }}
                        </h1>
                    </router-link>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-10">
                    <div class="relative">
                        <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                        <app-dropdown
                            :dropdown-type="''"
                            :type="'button'"
                            :slot-class="
                                `text-gray-500 group rounded-md inline-flex items-center text-base font-medium dark:border-gray-700 hover:shadow-sm hover:bg-gray-200 rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent text-sm text-gray-500`
                            "
                        >
                            <template v-slot:dropDownToggler>
                                <span>Skills</span>
                                <svg
                                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                            </template>
                            <app-dropdown-content>
                                <div
                                    class="absolute z-30 -ml-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                >
                                    <div
                                        class="relative rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                    >
                                        <div
                                            class="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8"
                                        >
                                            <router-link
                                                :to="{
                                                    name: 'dev-skills',
                                                    params: {
                                                        locale: `${$i18n.locale}`
                                                    }
                                                }"
                                                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <svg
                                                    class="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p
                                                        class="text-base font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        Development
                                                    </p>
                                                    <p
                                                        class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        I'm engaged in front-end
                                                        development, but I have
                                                        a little full-stack
                                                        experience as well.
                                                    </p>
                                                </div>
                                            </router-link>

                                            <router-link
                                                :to="{
                                                    name: 'pm-skills',
                                                    params: {
                                                        locale: `${$i18n.locale}`
                                                    }
                                                }"
                                                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <!-- Heroicon name: outline/cursor-click -->
                                                <svg
                                                    class="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p
                                                        class="text-base font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        Project Management
                                                    </p>
                                                    <p
                                                        class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        Managed huge and small
                                                        project in various
                                                        environment.
                                                    </p>
                                                </div>
                                            </router-link>

                                            <router-link
                                                :to="{
                                                    name: 'om-skills',
                                                    params: {
                                                        locale: `${$i18n.locale}`
                                                    }
                                                }"
                                                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <svg
                                                    class="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p
                                                        class="text-base font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        Online Marketing
                                                    </p>
                                                    <p
                                                        class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        Your customers&#039;
                                                        data will be safe and
                                                        secure.
                                                    </p>
                                                </div>
                                            </router-link>

                                            <router-link
                                                :to="{
                                                    name: 'seo-skills',
                                                    params: {
                                                        locale: `${$i18n.locale}`
                                                    }
                                                }"
                                                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <svg
                                                    class="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p
                                                        class="text-base font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        PPC Solutions
                                                    </p>
                                                    <p
                                                        class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        Online advertising
                                                        experience and platforms
                                                    </p>
                                                </div>
                                            </router-link>

                                            <router-link
                                                :to="{
                                                    name: 'sys-skills',
                                                    params: {
                                                        locale: `${$i18n.locale}`
                                                    }
                                                }"
                                                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <svg
                                                    class="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                                    />
                                                </svg>
                                                <div class="ml-4">
                                                    <p
                                                        class="text-base font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        System Operation
                                                    </p>
                                                    <p
                                                        class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        Build strategic funnels
                                                        that will drive your
                                                        customers to convert
                                                    </p>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div
                                            class="px-5 py-5 bg-gray-50 dark:bg-gray-300 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                                        >
                                            <div class="flow-root">
                                                <a
                                                    href="https://github.com/gyurielf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-400"
                                                >
                                                    <!-- Heroicon name: outline/play -->
                                                    <!--                                                    <svg
                                                        class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                        />
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>-->
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        class="flex-shrink-0 h-6 w-6 text-gray-700"
                                                        viewBox="0 0 16 16"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                                        />
                                                    </svg>
                                                    <span class="ml-3"
                                                        >GitHub</span
                                                    >
                                                </a>
                                            </div>

                                            <div class="flow-root">
                                                <a
                                                    href="#"
                                                    class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-400"
                                                >
                                                    <!-- Heroicon name: outline/phone -->
                                                    <svg
                                                        class="flex-shrink-0 h-6 w-6 text-gray-700"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <span class="ml-3"
                                                        >Contact</span
                                                    >
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </app-dropdown-content>
                        </app-dropdown>
                    </div>
                    <router-link
                        :to="{
                            name: 'education',
                            params: {
                                locale: `${$i18n.locale}`
                            }
                        }"
                        class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium dark:border-gray-700 hover:shadow-sm hover:bg-gray-200 rounded-md px-4
                py-2 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent
                text-sm text-gray-500"
                    >
                        Education
                    </router-link>
                    <router-link
                        :to="{
                            name: 'references',
                            params: {
                                locale: `${$i18n.locale}`
                            }
                        }"
                        class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium dark:border-gray-700 hover:shadow-sm hover:bg-gray-200 rounded-md px-4
                py-2 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent
                text-sm text-gray-500"
                    >
                        References
                    </router-link>
                    <!--                    <app-dropdown :dropdown-type="'hover'">
                        <template v-slot:dropDownToggler>
                            <div class="relative">
                                <button
                                    type="button"
                                    class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium dark:border-gray-700 hover:shadow-sm hover:bg-gray-200 rounded-md px-4
                            py-2 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-transparent dark:focus:ring-transparent
                            text-sm text-gray-500"
                                    aria-expanded="false"
                                >
                                    <span>More</span>
                                    <svg
                                        class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                        </template>
                        &lt;!&ndash;                        <app-dropdown-content>&ndash;&gt;
                        &lt;!&ndash;                            <p>hellooo</p>&ndash;&gt;
                        &lt;!&ndash;                        </app-dropdown-content>&ndash;&gt;
                    </app-dropdown>-->
                </nav>
                <div
                    class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
                >
                    <language-selector></language-selector>
                    <theme-toggler></theme-toggler>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ThemeToggler from '@/components/ui/Elements/ThemeToggler';
import LanguageSelector from '@/components/ui/Elements/LanguageSelector';
import AppDropdown from '@/components/ui/Elements/AppDropdown';
import AppDropdownContent from '@/components/ui/Elements/AppDropdownContent';

export default {
    name: 'TheNavigation',
    components: {
        AppDropdown,
        AppDropdownContent,
        LanguageSelector,
        ThemeToggler
    }
};
</script>

<style scoped></style>
