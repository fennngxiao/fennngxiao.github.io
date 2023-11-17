import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { handleMenuData } from '@/utils/menu'

export const menuDataStore = defineStore('menu', () => {
  const menuData = ref(handleMenuData())
  const menus = computed(() => menuData.value.menus)
  const categoryMap = computed(() => menuData.value.categoryMap)
  const articlesMap = computed(() => menuData.value.articlesMap)
  function cacheMenu(data) {
    sessionStorage.currentMenu = JSON.stringify(data)
  }
  return {
    menus,
    categoryMap,
    articlesMap,
    cacheMenu
  }
})
