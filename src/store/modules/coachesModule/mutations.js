export default {
    // My old way of getting/fetching coaches vie http request,
    /*getCoaches(state, payload) {
        state.coaches = payload[Object.keys(payload)[0]];
        // console.log(state.coaches);
    },*/
    setCoaches(state, payload) {
        state.coaches = payload;
    },
    /* ### POSTING DATA ### */
    registerCoach(state, payload) {
        // This step is done in the actions.
        /*let newCoach = {
            firstName: payload.firstName.val,
            lastName: payload.lastName.val,
            type: payload.type.val,
            desc: payload.desc.val,
            rate: payload.rate.val
        };
        newCoach.id = Math.floor(Math.random() * 999) + 1000;*/

        state.coaches.push(payload);
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};
