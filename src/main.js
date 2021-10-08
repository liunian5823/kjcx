import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import api from "./api/api";
import Vueaxios from "vue-axios";
import ElementUI from "element-ui";
import echarts from 'echarts'
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(Vueaxios, axios);
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '' // 开发环境
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = '' // 调试环境
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = '' // 生产环境
// }

Vue.prototype.api = api;
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
  if(to.path == '/register' || to.path == '/report/detection' || to.path == '/commitment/detection'){
    store.commit('navShow',false)
  }else{
    store.commit('navShow',true)
  }
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
