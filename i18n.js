import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import axios from 'axios';

export const SUPPORT_LOCALES = ['en', 'hu'];

export function setupI18n(options = { locale: 'en' }) {
    const i18n = createI18n(options);
    setI18nLanguage(i18n, options.locale);
    return i18n;
}

export function setI18nLanguage(i18n, locale) {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale;
    } else {
        i18n.global.locale.value = locale;
    }
    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    axios.defaults.headers.common['Accept-Language'] = locale;
    document.querySelector('html').setAttribute('lang', locale);
}

/*export async function loadLocaleMessages(i18n, locale) {
    // load locale messages with dynamic import --- LOCAL FILE IMPORT
    const messages = await import(
        /!* webpackChunkName: "locale-[request]" *!/ `./src/locales/${locale}.json`
    );

    // set locale and locale message -- LOCAL FILE IMPORT
    i18n.global.setLocaleMessage(locale, messages.default);

    // REST API CALL
    // const messages = (
    //     await axios.get(
    //         `https://web-resume-ecf64-default-rtdb.europe-west1.firebasedatabase.app/i18n/${locale}.json`
    //     )
    // ).data;

    // REST API VERSION
    // i18n.global.setLocaleMessage(locale, messages);

    return nextTick();
}*/

export async function loadLocaleMessages(i18n, locale) {
    // load locale messages with dynamic import
    const messages = await import(
        /* webpackChunkName: "locale-[request]" */ `./src/locales/${locale}.json`
    );

    // set locale and locale message
    await i18n.global.setLocaleMessage(locale, messages.default);

    return nextTick();
}
