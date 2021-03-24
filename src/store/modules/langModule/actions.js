export default {
    // addRequest({ commit }, payload) {
    //     commit('addRequest', payload);
    // },
    async switchThemeMode({ commit }, payload) {
        await commit('switchThemeMode', payload);
    },
    // Initialize theme when page is loaded
    initTheme({ commit }) {
        const cachedTheme = localStorage.theme ? localStorage.theme : false;
        //  `true` if the user has set theme to `dark` on browser/OS
        const userPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        if (cachedTheme) commit('SET_THEME', cachedTheme);
        else if (userPrefersDark) commit('SET_THEME', 'dark');
        else commit('SET_THEME', 'light');
    },
    // This simply flips whatever was most recently committed to storage.
    toggleTheme({ commit }) {
        switch (localStorage.theme) {
            case 'light':
                commit('SET_THEME', 'dark');
                break;

            default:
                commit('SET_THEME', 'light');
                break;
        }
    }
    /*
    async loadRequests({ commit, rootGetters }) {
        const token = rootGetters['authModule/token'];

        const response = await fetch(
            `https://vue-http-b1792-default-rtdb.europe-west1.firebasedatabase.app/requests.json?auth=${token}`
        );

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch!');
        }

        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: responseData[key].coachId,
                email: responseData[key].email,
                message: responseData[key].message,
                subject: responseData[key].subject
            };
            requests.push(request);
        }
        commit('setRequests', requests);
    }
    */
};
