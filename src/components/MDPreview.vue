<template>
  <v-md-preview :text="content" ref="mdPreviewRef"></v-md-preview>
</template>

<script setup>
import { ref, watch } from 'vue'
import { getFiles } from '@/utils/menu'
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const content = ref('')
const mdPreviewRef = ref(null)
const renderContent = async () => {
  if (props.path) {
    const { modules } = getFiles()
    const fileContent = modules.MD[props.path]
    content.value = fileContent || '暂无内容'
  } else {
    content.value = '## 欢迎您，我的朋友'
  }
}

watch(() => props.path, renderContent, { immediate: true })

/**
 * @description: 目录点击
 */
function scrollTo(target) {
  mdPreviewRef.value.scrollToTarget({
    target,
    scrollContainer: window,
    top: 60
  })
}
defineExpose({ scrollTo })
</script>

<style lang="scss" scoped></style>
