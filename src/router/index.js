import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
const whiteList = ['/home']
router.beforeEach((to, from, next) => {
  if (!isLoaded && sessionStorage.currentMenu && !whiteList.includes(to.path)) {
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
