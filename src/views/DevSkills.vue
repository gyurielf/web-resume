<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-5">
        <div class="mt-10">
            <div class="lg:text-center mt-3 mb-5">
                <h2
                    class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                >
                    Landeszman telep
                </h2>
                <p
                    class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl"
                >
                    Check out my developer experience
                </p>
                <p
                    class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto italic"
                >
                    Don't hesitate to ask!
                </p>
            </div>
            <dev-orientation class="mb-16"></dev-orientation>
        </div>
    </div>
</template>

<script>
import DevOrientation from '@/components/development/DevOrientation';
export default {
    name: 'DevSkills',
    components: { DevOrientation }
};
</script>

<style scoped></style>
