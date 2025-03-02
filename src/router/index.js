import { createRouter, createWebHistory } from 'vue-router'

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
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  let history = JSON.parse(localStorage.getItem('history')) || []

  // 只記錄 /project/project-2
  if (to.fullPath === '/project/project-2') {
    if (history.length === 0 || history[history.length - 1] !== to.fullPath) {
      history.push(to.fullPath)
    }
  }

  if (history.length > 50) {
    history.shift()
  }

  localStorage.setItem('history', JSON.stringify(history))
})

export default router
