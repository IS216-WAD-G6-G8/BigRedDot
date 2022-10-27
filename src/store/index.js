import { createStore } from 'vuex';
export default createStore({
    state: {
        cat: '',
        dark: false,
        isLoggedIn: false,
    },
    mutations: {
        updateCat(state, user_cat) {
            state.cat = user_cat;
        },
        updateDarkMode(state, user_mode) {
            state.dark = user_mode;
        },
        updateUser(state, user_state) {
            state.isLoggedIn = user_state;
        },
    },
    actions: {
        commitCat({ commit }, input) {
            commit('updateCat', input);
        },
        commitDarkMode({ commit }, input) {
            commit('updateDarkMode', input);
        },
        commitIsLoggedIn({ commit }, input) {
            commit('updateIsLoggedIn', input);
        },
    },
    getters: {
        getCat: function (state) {
            return state.cat;
        },
        getDarkMode: function (state) {
            return state.dark;
        },
        getIsLoggedIn: function (state) {
            return state.isLoggedIn;
        },
    },
});
