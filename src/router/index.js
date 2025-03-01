import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  {
    path: '/project',
    component: () => import('../views/Project.vue'),
    children: [
      { path: 'project-1', component: () => import('../views/Projects/Projects-1.vue') },
      { path: 'project-2', component: () => import('../views/Projects/Projects-2.vue') },
    ],
  },
  { path: '/aboutme', component: () => import('../views/Aboutme.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/Notfind.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
