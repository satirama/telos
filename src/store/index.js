import Vue from 'vue';
import Vuex from 'vuex';
import json from '../assets/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
  },
  actions: {
    getProducts({ state }) {
      state.products = json;
    },
  },
  modules: {
  },
});
