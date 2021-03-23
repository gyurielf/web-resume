import uiGetters from '@/store/modules/uiModule/getters';
import uiActions from '@/store/modules/uiModule/actions';
import uiMutations from '@/store/modules/uiModule/mutations';

const uiModule = {
    namespaced: true,
    state() {
        return {
            darkModeStatus: 'light'
        };
    },
    mutations: uiMutations,
    actions: uiActions,
    getters: uiGetters
};

export default uiModule;
