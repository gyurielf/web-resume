import { createRouter, createWebHistory } from 'vue-router';
import { setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from '/i18n';

import Home from '@/views/Home';
import About from '@/views/About';
import DevSkills from '@/views/DevSkills';
import PmSkills from '@/views/PmSkills';
import OmSkills from '@/views/OmSkills';
import SeoSkills from '@/views/SeoSkills';
import SysSkills from '@/views/SysSkills';

export function setupRouter(i18n) {
    const locale =
        i18n.mode === 'legacy' ? i18n.global.locale : i18n.global.locale.value;

    // setup routes
    const routes = [
        {
            path: '/:locale/',
            name: 'home',
            component: Home
        },
        {
            path: '/:locale/developer-skills',
            name: 'dev-skills',
            component: DevSkills
        },
        {
            path: '/:locale/project-manager-skills',
            name: 'pm-skills',
            component: PmSkills
        },
        {
            path: '/:locale/online-marketer-skills',
            name: 'om-skills',
            component: OmSkills
        },
        {
            path: '/:locale/seo-and-ppc-skills',
            name: 'seo-skills',
            component: SeoSkills
        },
        {
            path: '/:locale/system-operator-skills',
            name: 'sys-skills',
            component: SysSkills
        },
        {
            path: '/:locale/about',
            name: 'about',
            component: About
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => `/${locale}`
        }
    ];

    // create router instance
    const router = createRouter({
        history: createWebHistory(),
        routes,
        linkActiveClass: 'bg-gray-100 dark:bg-gray-600 transition',
        linkExactActiveClass: 'bg-gray-100 dark:bg-gray-600 transition'
    });

    // navigation guards
    router.beforeEach(async (to, from, next) => {
        const paramsLocale = to.params.locale;

        // use locale if paramsLocale is not in SUPPORT_LOCALES
        if (!SUPPORT_LOCALES.includes(paramsLocale)) {
            return next(`/${locale}`);
        }

        // load locale messages
        if (!i18n.global.availableLocales.includes(paramsLocale)) {
            await loadLocaleMessages(i18n, paramsLocale);
        }

        // set i18n language
        setI18nLanguage(i18n, paramsLocale);

        return next();
    });

    return router;
}
