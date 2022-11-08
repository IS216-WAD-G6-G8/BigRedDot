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
            console.log('update: ', user_favourites);
            state.userFavourites = user_favourites;
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
            console.log('store', input);
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
            return state.userFavourites;
        },
    },
});
