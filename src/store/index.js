import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const $http = axios.create({
  baseURL: "http://crm-api.id-a.pl/api",

});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cruds: [],
  },
  getters: {},
  mutations: {
    ADD_ITEM (state, cruds) {
      state.cruds = cruds;
    },
  },
  actions: {
    async addCruds({ commit }, crud) {
      try {
        await $http.post("/demo/tasks", crud);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async FetchCruds({ commit }) {
      try {
        const cruds = await $http.get("/demo/tasks");
        commit("ADD_ITEM", cruds.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async EditCrud({ commit }, editedItem) {
      try {
        await $http.put(
          `/demo/tasks/${editedItem.id}`,
          editedItem
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});
