import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);
var vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
export default new Vuex.Store({
  state: {
    navShow:true,
    tabs:[{index:'/houtai',name:1}]
  },
  plugins: [vuexLocal.plugin],
  mutations: {
    navShow(state, data) {
      state.navShow = data;
    },
    tabs(state,data){
      state.tabs = data
    }
  },
  actions: {},
  modules: {},
});
