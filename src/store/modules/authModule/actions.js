const apik = 'AIzaSyALCSKGK2nfR6hVd4ccM88ejU9mJBrMCbk';
let timer;
export default {
    // eslint-disable-next-line no-unused-vars
    async userLogin({ dispatch }, payload) {
        return dispatch('authenticate', {
            ...payload,
            mode: 'signin'
        });
    },
    async userSignUp({ dispatch }, payload) {
        return dispatch('authenticate', {
            ...payload,
            mode: 'signup'
        });
    },
    async authenticate({ commit, dispatch }, payload) {
        const mode = payload.mode;
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apik}`;
        if (mode === 'signup') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apik}`;
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            throw new Error(responseData.error.message || 'Failed to Auth!');
        }

        // Token (actually the login ) expiration time calculation and set in the local storage
        const expiresIn = responseData.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        // Set user login data in local storage
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        // If the timer counted down, the user will be auto logouted.
        timer = setTimeout(() => {
            dispatch('userLogout');
            dispatch('autoLogout');
        }, expiresIn);

        // Mutation commit into VUEX
        commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });
    },
    tryLogin({ commit, dispatch }) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }
        // If the token expired, the user will be auto logouted.
        timer = setTimeout(() => {
            dispatch('userLogout');
            dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            commit('setUser', {
                token,
                userId,
                tokenExpiration: null
            });
        }
    },
    async userLogout({ commit }) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        commit('setUser', {
            token: null,
            userId: null
        });
    },
    autoLogout({ commit, dispatch }) {
        dispatch('userLogout');
        commit('setAutoLogout');
    }
    // async userSignIn(context, payload) {
    //     const response = await fetch(
    //         `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${{apiKey}}`
    //     );
    // }
};
