import Container from '@/components/viewContainer.vue';
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/board',
    name: 'board',
    component: Container,
    redirect: '/board/index',
    children: [
      {
        path: '/board/index',
        name: '/board/index',
        component: () => import('../views/index.vue'),
        meta: {
          title: 'board',
        },
      },
    ],
  },
];

export default routes;
