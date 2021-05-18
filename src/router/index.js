import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../pages/Home.vue'),
    // redirect: '/index',
    // children: [
    //   { 
    //     path: '/index',
    //     name: 'index',
    //     component: () => import('../pages/index.vue')
    //   }
    // ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../pages/404.vue')
  },













  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
