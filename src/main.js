import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';
import { setupRouter } from './router';
import { setupI18n } from '/i18n';
import en from './locales/en.json';
import hu from './locales/hu.json';
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';

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

// reCaptcha 3 component
const captchav3 = {
    setup() {
        const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

        const recaptcha = async () => {
            // (optional) Wait until recaptcha has been loaded.
            await recaptchaLoaded();

            // Execute reCAPTCHA with action "login".
            // eslint-disable-next-line no-unused-vars
            const token = await executeRecaptcha('login');

            // Do stuff with the received token.
        };

        return {
            recaptcha
        };
    },
    template: '<button @click="recaptcha">Execute recaptcha</button>'
};

createApp(captchav3).use(VueReCaptcha, {
    siteKey: '6LdEP8QaAAAAAJTLlxMAGKzRpreSEV3XPBMDDEBZ'
});

createApp(App)
    .use(i18n)
    .directive('click-outside', clickOutside)
    .directive('hover-outside', hoverOutside)
    .use(store)
    .use(router)
    .mount('#app');
