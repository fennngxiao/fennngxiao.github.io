<template>
  <div class="md-page">
    <MDPreview :path="menu.path" class="markdown-preview" ref="mdPreviewRef" />
    <div class="catalog-wrap">
      <el-affix :offset="40">
        <div class="catalog">
          <div
            v-for="(tit, index) in titles"
            :key="index"
            :style="{ 'padding-left': `${tit.indent * 20}px` }"
            @click="handleTitleClick(tit)"
            class="catalog-item"
          >
            <span class="catalog-item-text" :style="{'font-weight': tit.indent > 1 ? 'normal' : 'bold'}">{{ tit.title }}</span>
          </div>
        </div>
      </el-affix>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MDPreview from '@/components/MDPreview.vue'
import { menuDataStore } from '@/stores/menu'
const menu = ref({})
const route = useRoute()
const router = useRouter()
const store = menuDataStore()
const titles = ref([])
const mdPreviewRef = ref(null)
watch(
  () => route.params.id,
  (id) => {
    if (route.path.includes('mdPage')) {
      if (id && store.articlesMap[id]) {
        menu.value = store.articlesMap[id]
        nextTick(() => {
          renderCatelog()
        })
      } else {
        router.replace('/')
      }
    }
  },
  { immediate: true, deep: true }
)
function renderCatelog() {
  const tits = mdPreviewRef.value.$el.querySelectorAll('h1,h2,h3,h4')
  const list = Array.from(tits).filter((title) => !!title.innerText.trim())

  if (!list.length) {
    titles.value = []
    return
  }

  const hTags = Array.from(new Set(list.map((title) => title.tagName))).sort()

  titles.value = list.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName)
  }))
}
/**
 * @description: 目录点击
 */
const handleTitleClick = (tit) => {
  const { lineIndex } = tit

  const heading = mdPreviewRef.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)

  if (heading) {
    mdPreviewRef.value.scrollTo(heading)
  }
}
</script>

<style lang="scss" scoped>
.md-page {
  display: flex;
  align-items: stretch;
  .catalog-wrap {
    width: 400px;
    border-left: 1px solid #e0e0eb;
    position: relative;
    .catalog {
      padding: 25px 10px 0;
      height: calc(100vh - 40px);
      overflow-y: auto;
      &-item{
        padding: 2px 0;
        cursor: pointer;
        &:hover{
          color: var(--color-a);
        }
      }
    }
  }
}
.markdown-preview {
  flex: 1;
  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    color: var(--color-title);
  }
  :deep(a) {
    color: var(--color-a);
  }
  :deep(img) {
    border-radius: 10px;
  }
}
</style>
