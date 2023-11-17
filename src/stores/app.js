import { ref } from 'vue'
import { defineStore } from 'pinia'

export const themeStore = defineStore('app', () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDarkTheme = ref(localStorage.isDark ? localStorage.isDark === 'true' : isDark)
  const setHtmlClass = () => {
    document.getElementsByTagName('html')[0].className = isDarkTheme.value ? 'dark-theme' : ''
  }
  setHtmlClass()
  function changeTheme(v) {
    isDarkTheme.value = v
    localStorage.isDark = v === isDark ? null : v
    setHtmlClass()
  }
  return {
    isDarkTheme,
    changeTheme
  }
})
