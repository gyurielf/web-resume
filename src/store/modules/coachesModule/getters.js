export default {
    coachList(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    selectedCoachData: (state, otherGetters) => coachId => {
        const coachList = otherGetters.coachList;
        return coachList.find(coach => coach.id == coachId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimestamp = new Date().getTime();

        return (currentTimestamp - lastFetch) / 1000 > 60;
    }
    // TESTS
    // randomNumber(state) {
    //     return state.randomN + 10;
    // },
    // getNumber: (state, getters) => num => {
    //     return getters.randomNumber + state.random2N + num;
    // }
};
