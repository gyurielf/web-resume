import { createStore } from 'vuex';
import uiModule from '@/store/modules/uiModule';
import authModule from '@/store/modules/authModule';
import langModule from '@/store/modules/langModule';
export default createStore({
    modules: {
        uiModule,
        authModule,
        langModule
    },
    state: {},
    mutations: {},
    actions: {}
});
