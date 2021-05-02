export default {
    async SET_CURRENT_LANGUAGE({ commit }, payload) {
        await commit('SET_CURRENT_LANGUAGE', payload);
    }
};
