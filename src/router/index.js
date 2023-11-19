import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/articles'
    },
    {
      path: '/articles',
      name: 'articles',
      component: Layout,
      children: [
        {
          path: 'mdPage/:id',
          name: 'mdPage',
          component: () => import('@/views/mdPage.vue')
        }
      ]
    }
  ]
})
let isLoaded = false
router.beforeEach((to, from, next) => {
  if (!isLoaded && sessionStorage.currentMenu) {
    isLoaded = true
    next({
      path: '/articles',
      query: {
        redirect: true,
        menu: sessionStorage.currentMenu
      }
    })
  } else {
    isLoaded = true
    next()
  }
})

export default router
