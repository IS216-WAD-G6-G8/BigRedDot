import { createStore } from 'vuex'

export default createStore({
    state: {
        cat: '',
        dark: false,
      },
    mutations: {
        updateCat(state, user_cat){
            state.cat = user_cat
        },
        updateDarkMode(state, user_mode){
            state.dark = user_mode
        }
    },
    actions: {
        commitCat({commit},input){
            commit('updateCat', input)
        },
        commitDarkMode({commit},input){
            commit('updateDarkMode', input)
        }
    },
    getters: {
        getCat: function(state){
            return state.cat
        },
        getDarkMode: function(state){
            return state.dark
        }
    }
})