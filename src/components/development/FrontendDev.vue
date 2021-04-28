<template>
    <div>
        <div class="lg:text-center my-8">
            <h2
                class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            >
                Current stack
            </h2>
        </div>
        <div
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white p-2"
                    >
                        <!-- Heroicon name: outline/globe-alt -->
                        <svg
                            version="1.1"
                            viewBox="0 0 261.76 226.69"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"
                            >
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                        fill="#ffffff"
                                    />
                                </g>
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                        fill="#34495e"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        Vue - Vuex, Vue Router, i18n
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    I started learning right before the Vue 3 release. So I have
                    to re-crawl the entire documentation and course for up to
                    date myself. Now I'm playing with i18n.
                </dd>
            </div>

            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/scale -->
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
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        NodeJS - Express, MongoDB, JWT Auth
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    I built a REST API backend for a demo projects, with
                    transaction handling and auth. For front-end I picked PUG
                    templating with SSR.
                </dd>
            </div>

            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/lightning-bolt -->
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
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        Transfers are instant
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                </dd>
            </div>

            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/annotation -->
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
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        Mobile notifications
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                </dd>
            </div>
        </div>
        <div class="lg:text-center my-8">
            <h2
                class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            >
                Future plans
            </h2>
        </div>
        <div
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white p-2"
                    >
                        <!-- Heroicon name: outline/globe-alt -->
                        <svg
                            version="1.1"
                            viewBox="0 0 261.76 226.69"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"
                            >
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                        fill="#ffffff"
                                    />
                                </g>
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                        fill="#34495e"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        NuxtJS
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    It's important for me because of vue, but the main reason is
                    the SEO. Unfortunately today the searching giants don't
                    recommend SPA-s for creating public sites.
                </dd>
            </div>
            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/scale -->
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
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        React - Redux, NextJS
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    Self-evident to learn the most popular javascript framework
                    end ecosystem.
                </dd>
            </div>

            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/lightning-bolt -->
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
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        TailwindCSS
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    You can see, that this project is using tailwindcss. But I'd
                    like to work with it and learn about much more.
                </dd>
            </div>

            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/annotation -->
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
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        Vuetify or BootstrapVue
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    For make my life easier :)
                </dd>
            </div>
            <div class="relative">
                <dt>
                    <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >
                        <!-- Heroicon name: outline/annotation -->
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
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                        </svg>
                    </div>
                    <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
                    >
                        Dart - Flutter
                    </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                    I'd like to learn some language for mobile application
                    development. I met hundreds of situations where could be
                    useful.
                </dd>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendDev'
};
</script>

<style scoped></style>
