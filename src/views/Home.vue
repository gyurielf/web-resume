<template>
    <div
        class="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8"
    >
        <div class="flex">
            <div
                class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full"
            >
                <a
                    href="#"
                    class="block bg-white dark:bg-gray-800 p-1 rounded-full hover:rotate-6 transform transition"
                >
                    <img
                        class="rounded-full h-40 w-40 inset-0 object-cover object-top shadow-xl"
                        src="../assets/cv_img.jpg"
                        alt=""
                    />
                </a>
            </div>
        </div>
        <div class="lg:text-center">
            <h2
                class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            >
                Mezőhegyes
            </h2>
            <p
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl"
            >
                Lifelong learning is a must!
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto italic">
                It is the important for everyone. But for us, is this the way to
                survive.
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {}
};
</script>
