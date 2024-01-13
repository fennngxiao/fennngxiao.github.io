<template>
  <div class="md-page">
    <MDPreview :path="menu.path" class="markdown-preview" ref="mdPreviewRef" />
    <div class="catalog-wrap" :class="{ fold: isCatalogFold, 'no-ani': isDragging }" :style="{ width: `${catalogW}px` }">
      <el-affix :offset="40" :style="{ width: `${catalogW}px` }">
        <DragBar :origin="catalogW" @change="onDragBarChange" />
        <div class="fold-btn" @click="isCatalogFold = !isCatalogFold">
          <i class="iconfont icon-unfold"></i>
        </div>
        <div class="catalog">
          <div v-for="(tit, index) in titles" :key="index" :style="{ 'padding-left': `${tit.indent * 20}px` }"
            @click="handleTitleClick(tit)" class="catalog-item">
            <span class="catalog-item-text" :style="{ 'font-weight': tit.indent > 1 ? 'normal' : 'bold' }">{{ tit.title
            }}</span>
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
import DragBar from '@/components/DragBar.vue'
import { menuDataStore } from '@/stores/menu'
const CATELOG_DEF_WIDTH = 400;
const CATELOG_FOLD_WIDTH = 15;
const menu = ref({})
const route = useRoute()
const router = useRouter()
const store = menuDataStore()
const titles = ref([])
const mdPreviewRef = ref(null)
const isCatalogFold = ref(false);
const catalogW = ref(CATELOG_DEF_WIDTH)
const isDragging = ref(false)
let dragW = null;
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
watch(isCatalogFold, (v) => {
  catalogW.value = v ? CATELOG_FOLD_WIDTH : dragW || CATELOG_DEF_WIDTH;
})
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

let dragTimer = null;

const onDragBarChange = (val) => {
  if (!isCatalogFold.value && val < CATELOG_DEF_WIDTH) {
    catalogW.value = val;
    dragW = catalogW.value;
    if (val < CATELOG_FOLD_WIDTH) {
      catalogW.value = CATELOG_FOLD_WIDTH;
      dragW = null;
      isCatalogFold.value = true;
    }

    isDragging.value = true;
    //  拖拽时关闭延时动画
    if (dragTimer) clearTimeout(dragTimer);
    dragTimer = setTimeout(() => {
      isDragging.value = false;
      dragTimer = null;
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
.md-page {
  display: flex;
  align-items: stretch;

  .catalog-wrap {
    border-left: 1px solid #e0e0eb;
    position: relative;
    transition: width 0.5s cubic-bezier(.3, -0.24, .71, 1.23);

    &.no-ani {
      transition: unset;
    }

    &.fold {

      .fold-btn {
        transform: rotate(180deg);
      }
    }

    .catalog {
      padding: 25px 10px 0;
      height: calc(100vh - 40px);
      overflow-y: auto;

      &-item {
        padding: 2px 0;
        cursor: pointer;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        &:hover {
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

.fold-btn {
  position: absolute;
  left: -12px;
  top: 50vh;
  z-index: 10;
  cursor: pointer;
  background: #5d67e9;
  border-radius: 50%;
  color: #fff;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 22px;
  transition: all 0.3s ease-in-out;

  i {
    font-size: 12px;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
