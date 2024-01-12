<template>
  <div class="top-bar">
    <div class="home-btn" @click="goHome()"><img src="../../assets/logo.png" alt="" /></div>
    <div class="actions">
      <div class="search-btn btn"><i class="iconfont icon-search"></i></div>
      <div class="github-btn btn"><i class="iconfont icon-github"></i></div>
      <el-switch
        class="theme-switch btn"
        v-model="isDarkTheme"
        size="default"
        inline-prompt
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon"
        @change="themeChange"
      />
    </div>
  </div>
  <div class="layout">
    <Menu @select="onMenuSelect" />
    <div class="container-wrap">
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import { nextTick } from 'vue'
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { themeStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const store = themeStore()
const { isDarkTheme } = storeToRefs(store)

const onMenuSelect = (menu) => {
  if (menu.type === 'VUE') {
    router.push({ path: menu.path })
  } else {
    router.push({ path: `/articles/mdPage/${menu.id}` })
  }
}
const themeChange = (v) => {
  store.changeTheme(v)
}
if (route.query.redirect && route.query.menu) {
  nextTick(() => {
    onMenuSelect(JSON.parse(route.query.menu))
  })
}
const goHome = () => { 
  router.push('/home')
}
</script>
<style lang="scss" scoped>
$topBarHeight: 40px;
$menuWidth: 280px;
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: var(--app-base-bg-color);
  height: $topBarHeight;
  color: var(--vt-c-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 10;
  .home-btn {
    background: #fff;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    transition: all ease-in-out 0.15s;
    margin-top: 5px;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgb(0 0 0 / 80%);
    }
  }
  .actions {
    display: flex;
    align-items: center;
    .btn {
      margin: 0 5px;
      cursor: pointer;
    }
  }
  .theme-switch {
    --el-switch-off-color: #948e88;
    --el-switch-border-color: #999;
    --el-switch-on-color: #333;
  }
}
.layout {
  display: flex;
  width: 100%;
  height: 100%;

  .el-menu {
    width: $menuWidth;
    height: calc(100vh - $topBarHeight);
    position: fixed;
    z-index: 10;
    top: $topBarHeight;
    left: 0;
  }

  .container-wrap {
    width: 100vw;
    min-height: 100%;
    background: var(--app-base-bg-color);
    padding: $topBarHeight 0 0 $menuWidth;
    .container {
      min-height: 100%;
      box-sizing: border-box;
      background: var(--color-background);
      border-radius: 16px 0 0 16px;
    }
  }
}
</style>
