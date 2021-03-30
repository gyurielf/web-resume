import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';
import { setupRouter } from './router';
import { setupI18n } from '/i18n';
import en from './locales/en.json';
import hu from './locales/hu.json';

import clickOutside from '@/directives/clickOutside';
import hoverOutside from '@/directives/hoverOutside';

const i18n = setupI18n({
    globalInjection: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        hu
    }
    // silentTranslationWarn: true // for test
});

const router = setupRouter(i18n);

createApp(App)
    .use(i18n)
    .directive('click-outside', clickOutside)
    .directive('hover-outside', hoverOutside)
    .use(store)
    .use(router)
    .mount('#app');
