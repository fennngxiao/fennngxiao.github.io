import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNav: '',
  },
  mutations: {
    setActiveNav(state, value) {
      state.activeNav = value;
    },
  },
  actions: {},
  modules: {},
});
