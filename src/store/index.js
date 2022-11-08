import { createStore } from 'vuex';
import firebase from 'firebase/compat/app';
export default createStore({
    state: {
        cat: '',
        dark: false,
        user: null,
        userFavourites: [],
    },
    mutations: {
        updateCat(state, user_cat) {
            state.cat = user_cat;
        },
        updateDarkMode(state, user_mode) {
            state.dark = user_mode;
        },
        updateUser(state) {
            state.user = firebase.auth().currentUser;
        },
        updateUserFavourites(state, user_favourites) {
            state.userFavourites = user_favourites;
            console.log('after:', state.userFavourites);
        },
    },
    actions: {
        commitCat({ commit }, input) {
            commit('updateCat', input);
        },
        commitDarkMode({ commit }, input) {
            commit('updateDarkMode', input);
        },
        commitUser({ commit }) {
            commit('updateUser');
        },
        commitUserFavourites({ commit }, input) {
            commit('updateUserFavourites', input);
        },
    },
    getters: {
        getCat: function (state) {
            return state.cat;
        },
        getDarkMode: function (state) {
            return state.dark;
        },
        getUser: function (state) {
            return state.user;
        },
        getUserFavourites: function (state) {
            console.log('get: ', state.userFavourites);
            return state.userFavourites;
        },
    },
});
