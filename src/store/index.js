import { createStore } from 'vuex';
export default createStore({
    state: {
        cat: '',
    },
    mutations: {
        updateCat(state, user_cat) {
            state.cat = user_cat;
        }
    },
    actions: {
        commitCat({ commit }, input) {
            commit('updateCat', input);
        }
    },
    getters: {
        getCat: function (state) {
            return state.cat;
        }
    }
});
