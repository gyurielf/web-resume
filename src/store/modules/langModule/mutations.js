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
    SET_CURRENT_LANGUAGE(state, payload) {
        state.currentLanguage = payload;
        localStorage.lang = payload;
    }
};
