import { createStore } from 'vuex';
import uiModule from '@/store/modules/uiModule';
import authModule from '@/store/modules/authModule';
export default createStore({
    modules: {
        uiModule,
        authModule
    },
    state: {},
    mutations: {},
    actions: {}
});
