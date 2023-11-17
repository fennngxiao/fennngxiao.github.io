<template>
  <v-md-preview :text="content"></v-md-preview>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const content = ref('');

const renderContent = async () => {
  if (props.path) {

    const file = await import(`${props.path}?raw`)
    content.value = file?.default || '暂无内容';
  } else {
    content.value = '## 欢迎您，我的朋友';
  }
}

watch(() => props.path, renderContent, { immediate: true })
</script>

<style lang="scss" scoped></style>