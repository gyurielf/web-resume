import langGetters from '@/store/modules/langModule/getters';
import langActions from '@/store/modules/langModule/actions';
import langMutations from '@/store/modules/langModule/mutations';

const langModule = {
    namespaced: true,
    state() {
        return {
            currentLanguage: null
        };
    },
    mutations: langMutations,
    actions: langActions,
    getters: langGetters
};

export default langModule;
