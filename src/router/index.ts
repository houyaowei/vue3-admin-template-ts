import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from "vue-router"

//TODO,新版中该api已经过期，已经改成glob
const modules = import.meta.globEager('./../views/**/router/*.ts');

//router auto  import
let customerRouter: Array<RouteRecordRaw> = [];

for (const k in modules) {
  if (Object.hasOwnProperty.call(modules, k)) {
    // console.log('to find router')
    customerRouter = customerRouter.concat(modules[k].default);
  }
}

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login/index',
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: staticRoutes.concat(customerRouter),
});

export default router;
