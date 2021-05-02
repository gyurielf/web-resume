export default {
    SET_USER(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        // state.tokenExpiration = payload.tokenExpiration;
        state.didAutoLogout = false;
    },
    loginUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        // state.tokenExpiration = payload.tokenExpiration;
    },
    // LOGOUT_USER(state) {
    //     state.token = null;
    //     state.userId = null;
    //     state.tokenExpiration = null;
    // },
    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
};
