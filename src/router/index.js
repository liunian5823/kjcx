import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "监测类型",
    },
    component: () => import("../views/type/index.vue"),
    children: []
  },
  {
    path: "/login",
    component: (resolve) => require(["../views/Login"], resolve),
  },
  {
    path: "/register",
    component: (resolve) => require(["../views/Register"], resolve),
  },
  {
    path: "/commitment",
    component: (resolve) => require(["../views/commitment/index"], resolve),
  },
  {
    path: "/commitment/detection",
    component: (resolve) => require(["../views/commitment/detection"], resolve),
  },
  {
    path: "/report",
    component: (resolve) => require(["../views/report/index"], resolve),
  },
  {
    path: "/report/detection",
    component: (resolve) => require(["../views/report/detection"], resolve),
  },
  {
    path: "/houtai",
    name: "Home",
    redirect: "/houtai",
    component: Home,
    children: [
      {
        path: "/houtai",
        name: "houtai",
        meta: {
          title: "首页"
        },
        component: () => import("../views/index/index1.vue")
      },
      {
        path: "/houtai1",
        name: "houtai1",
        meta: {
          title: "首页1"
        },
        component: () => import("../views/index/index2.vue")
      },
      {
        path: "/houtai2",
        name: "houtai2",
        meta: {
          title: "首页2"
        },
        component: () => import("../views/index/index3.vue")
      },
      {
        path: "/houtai3",
        name: "houtai3",
        meta: {
          title: "首页3"
        },
        component: () => import("../views/index/index4.vue")
      },
      {
        path: "/houtai4",
        name: "houtai4",
        meta: {
          title: "首页4"
        },
        component: () => import("../views/index/index5.vue")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
router.beforeEach((to, from, next) => {
  // console.log(to.path)
  next();
});

export default router;
