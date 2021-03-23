export default {
    /*addRequest(state, payload) {
        const newRequest = {
            ...payload
        };
        state.requests.push(newRequest);
    },
    setRequests(state, payload) {
        state.requests = payload;
    },*/
    switchThemeMode(state, payload) {
        state.darkModeStatus = payload;
    }
};
