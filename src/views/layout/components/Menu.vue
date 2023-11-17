<template>
  <el-menu @select="handleMenuSelect" :default-active="activeMenu">
    <MenuItem :data="menu" v-for="menu in menus" :key="menu.id" />
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
// components
import MenuItem from './MenuItem.vue'
import { menuDataStore } from '@/stores/menu'
// const router = useRouter()
// const route = useRoute()
const emits = defineEmits(['select'])
const store = menuDataStore()
// data
const menus = ref(store.menus)
// const isCollapse = ref(false)
const activeMenu = ref('')
// data
const handleMenuSelect = (id) => {
  activeMenu.value = id
  emits('select', store.articlesMap[id])
  store.cacheMenu(store.articlesMap[id])
}

if (sessionStorage.currentMenu) {
  activeMenu.value = JSON.parse(sessionStorage.currentMenu).id
}
/* debugger
if (route.query.redirect) {
  router.replace({ path: route.query.redirect, query: { ...route.query, redirect: null } })
}
if (route.query.id) {
  handleMenuSelect(route.query.id)
} */
</script>

<style lang="scss" scoped>
.el-menu {
  --el-menu-border-color: transparent;
  --el-menu-bg-color: #5d67e9;
  --el-menu-text-color: #fff;
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: #1d399c;
  --el-menu-submenu-title-bg-color: #2f44af;
  padding-top: 16px;
  :deep(.el-menu-item.is-active) {
    font-weight: bold;
    background-color: var(--el-menu-hover-bg-color);
  }
  :deep(.el-sub-menu__title) {
    // background: var(--el-menu-submenu-title-bg-color);
  }
}
</style>
