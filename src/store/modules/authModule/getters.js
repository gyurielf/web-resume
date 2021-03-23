export default {
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        // console.log(!!state.token + ' auth state');
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
};
