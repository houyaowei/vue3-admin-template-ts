import { RouteRecordRaw } from "vue-router"
//导航
declare interface tagMata {
  name: string;
  path: string;
  title: string;
  index: number;
  $route?: RouteRecordRaw;
}
