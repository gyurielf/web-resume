import uiGetters from '@/store/modules/uiModule/getters';
import uiActions from '@/store/modules/uiModule/actions';
import uiMutations from '@/store/modules/uiModule/mutations';

const uiModule = {
    namespaced: true,
    state() {
        return {
            darkModeStatus: 'light',
            theme: false
        };
    },
    mutations: uiMutations,
    actions: uiActions,
    getters: uiGetters
};

export default uiModule;
