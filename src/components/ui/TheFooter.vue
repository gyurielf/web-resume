<template>
    <footer
        class="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20 dark:bg-gray-800"
    >
        <div
            class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"
        >
            <ul
                class="Footer_nav__2rFid text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 dark:text-gray-400 dark:group-hover:bg-gray-50"
            >
                <li class="space-y-5 row-span-2">
                    <h2
                        class="text-md font-semibold tracking-wide text-gray-900 dark:text-gray-500 uppercase"
                    >
                        Getting started
                    </h2>
                    <ul class="space-y-4">
                        <li>
                            <a
                                class="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                                href="https://github.com/gyurielf"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                class="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                                href="https://www.linkedin.com/in/gyorgykallai/"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li></li>
                        <li>
                            <a
                                class="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                                href="https://www.youtube.com/tailwindlabs"
                            >
                                valami
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="space-y-5 row-span-2">
                    <h2
                        class="text-md font-semibold tracking-wide text-gray-900 dark:text-gray-500 uppercase"
                    >
                        Core concepts
                    </h2>
                </li>
                <li class="space-y-5 row-span-2">
                    <h2
                        class="text-md font-semibold tracking-wide text-gray-900 dark:text-gray-500 uppercase"
                    >
                        Customization
                    </h2>
                </li>
                <li class="space-y-5">
                    <h2
                        class="text-md font-semibold tracking-wide text-gray-900 dark:text-gray-500 uppercase"
                    >
                        Links
                    </h2>
                    <ul class="space-y-4">
                        <li>
                            <a
                                class="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                                href="https://github.com/gyurielf"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <router-link
                                class="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                                :to="{
                                    name: 'sign-in',
                                    params: {
                                        locale: `${$i18n.locale}`
                                    }
                                }"
                                active-class=""
                                exact-active-class=""
                            >
                                Sign-in
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="pt-10 sm:pt-12 dark:text-gray-500">
                2021 © {{ $t('brand') }} - Budapest
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
};
</script>

<style scoped></style>
