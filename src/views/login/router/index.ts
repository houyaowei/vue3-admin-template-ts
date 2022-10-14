import Container from '@/components/viewContainer.vue';
import type { RouteRecordRaw } from "vue-router";

const routes: Array< RouteRecordRaw > = [
  {
    path: '/login',
    name: 'login',
    component: Container,
    redirect: '/login/index',
    children: [
      {
        path: '/login/index',
        name: '/login/index',
        component: () => import('../views/index.vue'),
        meta: {
          title: 'login',
        },
      },
    ],
  },
];

export default routes;
