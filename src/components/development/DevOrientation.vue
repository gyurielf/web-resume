<template>
    <div class="my-3">
        <div>
            <div class="flex lg:justify-center items-center">
                <div
                    class="w-1/2 h-20 flex items-center rounded-lg p-1 duration-300 ease-in-out cursor-pointer"
                    :class="{
                        'bg-green-400': !toggleActive,
                        'bg-yellow-400': toggleActive
                    }"
                    @click="toggleActive = !toggleActive"
                >
                    <div class="z-10 select-none pl-16">
                        <span
                            class="text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl"
                            :class="{
                                'dark:text-gray-500': toggleActive,
                                'dark:text-gray-600': !toggleActive
                            }"
                        >
                            Frontend
                        </span>
                    </div>
                    <div class="z-10 ml-auto select-none pr-16">
                        <span
                            class="text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl"
                            :class="{
                                'dark:text-gray-500': !toggleActive,
                                'dark:text-gray-600': toggleActive
                            }"
                        >
                            Backend
                        </span>
                    </div>
                    <div
                        class="absolute bg-gray-200 w-72 h-16 rounded-lg shadow-md transform duration-300 ease-in-out"
                        :class="{ 'translate-x-80': toggleActive }"
                    ></div>
                </div>
            </div>
        </div>
        <transition :name="activeCompTransition" mode="out-in">
            <component :is="activeComponent" class="mt-10"></component>
        </transition>
    </div>
</template>

<script>
import { ref, defineAsyncComponent, computed } from 'vue';
export default {
    name: 'DevOrientation',
    components: {
        BackendDev: defineAsyncComponent(() =>
            import('@/components/development/BackendDev.vue')
        ),
        FrontendDev: defineAsyncComponent(() =>
            import('@/components/development/FrontendDev.vue')
        )
    },
    setup() {
        const toggleActive = ref(false);
        // const activeComponent = ref('');

        const activeComponent = computed(() =>
            toggleActive.value ? 'BackendDev' : 'FrontendDev'
        );

        const activeCompTransition = computed(() =>
            toggleActive.value ? 'slide-right' : 'slide-left'
        );

        return { toggleActive, activeComponent, activeCompTransition };
    }
};
</script>

<style scoped>
/*TRANSITION TIME*/
.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: 0.6s;
}
/*RIGHT SLIDE*/
.slide-right-enter-from {
    transform: translate(-25%, 0);
    opacity: 0;
}
.slide-right-enter-to {
    opacity: 1;
}
.slide-right-leave-to {
    transform: translate(25%, 0);
    opacity: 0;
}
/*LEFT SLIDE*/
.slide-left-enter-from {
    transform: translate(25%, 0);
    opacity: 0;
}
.slide-left-enter-to {
    opacity: 1;
}
.slide-left-leave-to {
    transform: translate(-25%, 0);
    opacity: 0;
}
</style>
