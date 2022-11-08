import { createStore } from 'vuex'
import firebase from 'firebase/compat/app'

export default createStore({
    state: {
        cat: '',
        dark: false,
        user: null,
    },
    mutations: {
        updateCat(state, user_cat) {
            state.cat = user_cat
        },
        updateDarkMode(state, user_mode) {
            state.dark = user_mode
        },
        updateUser(state) {
            state.user = firebase.auth().currentUser
        },
    },
    actions: {
        commitCat({ commit }, input) {
            commit('updateCat', input)
        },
        commitDarkMode({ commit }, input) {
            commit('updateDarkMode', input)
        },
        commitUser({ commit }) {
            commit('updateUser')
        },
    },
    getters: {
        getCat: function (state) {
            return state.cat
        },
        getDarkMode: function (state) {
            return state.dark
        },
        getUser: function (state) {
            return state.user
        },
    },
})
