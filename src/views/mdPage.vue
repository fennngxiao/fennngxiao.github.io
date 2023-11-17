<template>
  <MDPreview :path="menu.path" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MDPreview from '@/components/MDPreview.vue'
import { menuDataStore } from '@/stores/menu'
const menu = ref({})
const route = useRoute()
const router = useRouter()
const store = menuDataStore()

watch(
  () => route.params.id,
  (id) => {
    if (route.path.includes('mdPage')) {
      if (id && store.articlesMap[id]) {
        menu.value = store.articlesMap[id]
      } else {
        router.replace('/')
      }
    }
  },
  { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped></style>
