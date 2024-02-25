<template>
  <div class="icon" @click="showSearchPage">
    <i class="iconfont icon-search"></i>
  </div>
  <Teleport to="body">
    <Transition>
      <div class="search-page" v-if="visible">
        <el-icon @click="closeSearchPage" class="close-btn">
          <Close />
        </el-icon>
        <div class="search-page-content">

          <div class="search-ipt">
            <el-input v-model="keywords" placeholder="请输入搜索内容" clearable @change="search" />
          </div>
          <div class="res-list">
            <div class="res-item" v-for="item of resList" :key="item.id" @click="goto(item)">
              <div class="res-item-name" v-html="item.title"></div>
              <div class="res-item-content">
                <template v-for="(str, index) of item.cttArr" :key="index">
                  <mark v-if="index === 1">{{ str }}</mark>
                  <template v-else>{{ str }}</template>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import allData from '@/utils/allFiles.json';
import { Close } from '@element-plus/icons-vue'

const visible = ref(false);
const resList = ref([]);
const keywords = ref('');
const router = useRouter();

const DEF_INDEX_NUM = 80;

const clearPage = () => {
  keywords.value = '';
  resList.value = [];
}
const showSearchPage = () => {
  clearPage();
  visible.value = true
}
const closeSearchPage = () => {
  clearPage();
  visible.value = false
}
// 搜索
const search = () => {
  if (keywords.value?.length) {
    let res = [];
    allData.forEach((item) => {
      if (item.fileName.indexOf(keywords.value) > -1 || item.content.indexOf(keywords.value) > -1) {
        const title = item.fileName.replace(keywords.value, `<mark>${keywords.value}</mark>`)

        let cIndex = item.content.indexOf(keywords.value);
        let ctt = item.content.substring(cIndex - DEF_INDEX_NUM, cIndex + DEF_INDEX_NUM);
        ctt = `${cIndex - DEF_INDEX_NUM > 0 ? '...' : ''} ${ctt} ${cIndex + DEF_INDEX_NUM > item.content.length - 1 ? '...' : ''}`
        const cttArr = ctt.split(keywords.value);
        cttArr.splice(1, 0, keywords.value)
        res.push({
          id: item.id,
          title,
          cttArr
        })
      }
    })
    resList.value = res;
  }
}
const goto = (item) => {
  closeSearchPage();
  router.push(`/articles/mdPage/${item.id}`)
}
</script>

<style lang="scss" scoped>
.search-page {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: var(--color-background);

  &-content {
    width: 1000px;
    margin: auto;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.close-btn {
  font-size: 28px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.search-ipt {
  margin-top: 40px;

  .el-input {
    font-size: 28px;
  }

  :deep(.el-icon) {
    font-size: 28px;
  }

  :deep(.el-input__inner) {
    height: 42px;
    color: var(--color-text);
  }

  :deep(.el-input__wrapper) {
    box-shadow: none;
    border-bottom: 2px solid var(--color-table-background-2n);
    border-radius: 0;
    background-color: var(--color-background);
  }
}

.res-list {
  height: calc(100vh - 120px);
  overflow-y: auto;
}

.res-item {
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;

  &-name {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-text);
  }

  &-content {
    font-size: 16px;
    color: #999;
  }
}
</style>