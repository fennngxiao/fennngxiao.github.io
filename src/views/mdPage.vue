<template>
  <MDPreview :path="menu.path" class="markdown-preview" />
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

<style lang="scss" scoped>
.markdown-preview {
  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    color: var(--color-title);
  }
  :deep(img) {
    border-radius: 10px;
  }
}
</style>
