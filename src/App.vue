<template>
    <the-navigation></the-navigation>
    <router-view class="mt-3 mb-auto flex-auto"></router-view>
    <the-footer></the-footer>
</template>
<script>
import TheNavigation from '@/components/ui/TheNavigation';
import TheFooter from '@/components/ui/TheFooter';
import {
    computed,
    onBeforeMount,
    ref,
    watch,
    provide,
    defineComponent
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES } from '../i18n';

export default defineComponent({
    name: 'App',
    components: { TheFooter, TheNavigation },
    setup() {
        // Init Vuex Store
        const store = useStore();

        /**
         * THEME PRELOAD
         **/
        onBeforeMount(() => {
            store.dispatch('uiModule/initTheme');
        });

        const theme = computed(() => store.getters['uiModule/getTheme']);

        watch(theme, newTheme => {
            if (newTheme === 'light') {
                document.querySelector('html').classList.remove('dark');
            } else {
                document.querySelector('html').classList.add('dark');
            }
        });
        /**
         * end theme preload
         **/

        /**
         * INITIALIZE i18n
         **/
        const router = useRouter();
        const { t, locale } = useI18n({ useScope: 'global' });
        /**
         * select locale value for language select form
         *
         * If you use the vue-i18n composer `locale` property directly, it will be re-rendering component when this property is changed,
         * before dynamic import was used to asynchronously load and apply locale messages
         * To avoid this, use the anoter locale reactive value.
         */
        const currentLocale = ref(locale.value);
        // sync to switch locale from router locale path
        watch(router.currentRoute, route => {
            currentLocale.value = route.params.locale;
        });
        /**
         * when change the locale, go to locale route
         *
         * when the changes are detected, load the locale message and set the language via vue-router navigation guard.
         * change the vue-i18n locale too.
         */
        watch(currentLocale, val => {
            router.push({
                name: router.currentRoute.value.name,
                params: { locale: val }
            });
        });

        /**
         * end initialize i18n
         **/

        provide('currentLocale', currentLocale);
        provide('supportLocales', SUPPORT_LOCALES);
        provide('t', t);

        return { t, locale, currentLocale, supportLocales: SUPPORT_LOCALES };
    }
});
</script>

<style></style>
