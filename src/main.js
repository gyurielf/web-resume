import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';
import { setupRouter } from './router';
import { setupI18n } from '/i18n';
import en from './locales/en.json';
import hu from './locales/hu.json';
import clickOutside from '@/directives/clickOutside';

const i18n = setupI18n({
    globalInjection: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        hu
    }
});
const router = setupRouter(i18n);
createApp(App)
    .directive('click-outside', clickOutside)
    .use(store)
    .use(i18n)
    .use(router)
    .mount('#app');
