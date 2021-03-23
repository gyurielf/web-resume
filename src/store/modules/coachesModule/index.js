import coachesMutations from '@/store/modules/coachesModule/mutations';
import coachesActions from '@/store/modules/coachesModule/actions';
import coachesGetters from '@/store/modules/coachesModule/getters';

const coachesModule = {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                // {
                //     id: 1231,
                //     firstName: 'Gyuri',
                //     lastName: 'Elf',
                //     desc: 'sziahello',
                //     type: ['backend', 'frontend'],
                //     rate: 5.99
                // },
                // {
                //     id: 3874,
                //     firstName: 'Bloody',
                //     lastName: 'Mary',
                //     desc: 'kutyafej',
                //     type: ['management', 'graphics'],
                //     rate: 3.99
                // }
            ]
        };
    },
    mutations: coachesMutations,
    actions: coachesActions,
    getters: coachesGetters
};

export default coachesModule;
