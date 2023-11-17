import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
/**
 * @description: 根据目录读取文件名列表
 * @return {*}
 */
/* const getFileNameListByDirectory = () => {
  const files = import.meta.glob('./views/Page*.vue') // 自定义规则
  for (let i in files) {
    // console.log(123, i, files[i]);
    const newName = i.replace(/.\/views\//, '').replace(/.vue/, '')
    // console.log(13, newName, newName.toLocaleLowerCase(), files[i]);
    router.addRoute({
      path: '/' + newName.toLocaleLowerCase(),
      name: newName,
      component: files[i]
    })
  }
} */
// getFileNameListByDirectory()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
