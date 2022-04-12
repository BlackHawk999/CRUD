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
    SET_ITEM(state, payload) {
      state.cruds = payload;
    },
    ADD_ITEM(state, payload) {
      state.cruds.unshift(payload);
    },
    DELETE_ITEM(state, payload) {
      const index = state.cruds.findIndex(({ id }) => id === payload);

      if(index >= 0) {
        state.cruds.splice(index, 1)
      }
    },
    EDIT_ITEM(state, payload) {
      const index = state.cruds.findIndex(({ id }) => id === payload.id);
      
      state.cruds[index] = { ...payload }
    }
  },
  actions: {
    async fetchCruds({ commit }) {
      try {
        const cruds = await $http.get("/demo/tasks");
        commit("SET_ITEM", cruds.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async addCruds({ commit }, crud) {
      try {
        await $http.post("/demo/tasks", crud);
        commit("ADD_ITEM", crud)
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async editCrud({ commit }, editedItem) {
      try {
        await $http.put(
          `/demo/tasks/${editedItem.id}`,
          editedItem
        );

        commit("EDIT_ITEM", editedItem);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deleteCrud({ commit }, id) {
      try {
        commit('DELETE_ITEM', id)
      } catch {
        alert(error);
        console.log(error);
      }
    }
  },
  modules: {},
});
