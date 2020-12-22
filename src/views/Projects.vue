<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:30:31
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-22 18:07:56
-->
<template>
  <app-container>
    <template #pageContent>
      <div class="projects" v-if="dataList.length">
        <template v-for="pro in dataList">
          <div class="pro__item" :key="pro.name" @click="onProClick(pro)">
            <img :src="pro.logo" alt="" class="logo" />
            <span class="pro__item-name">{{ pro.name }}</span>
            <i class="arrow_icon"></i>
          </div>
        </template>
      </div>
    </template>
  </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer';
export default {
  name: 'Projects',
  components: {
    AppContainer,
  },
  data() {
    return {
      dataList: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.initProjects();
    },
    initProjects() {
      this.dataList = [{ name: '一席', logo: require('../assets/imgs/yixi_logo.png'), url: 'http://www.yixi.tv' }];
    },
    onProClick(data) {
      window.open(data.url, '__block');
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow_icon {
  position: relative;
  width: 0;
  height: 0;
  font-size: 3px;
  &::after {
    position: absolute;
    left: -5em;
    top: -2.75em;
    content: '';
    width: 1em;
    height: 1em;
    margin: 0 auto;
    border-radius: 50%;
    transition: all ease-in-out 0.3s;
    background: #e0e0eb;
    box-shadow: 0 1.5em 0 #e0e0eb, -1.5em 1.5em 0 #e0e0eb, -3em 1.5em 0 #e0e0eb, 0 3em 0 #e0e0eb, -1.5em 3em 0 #e0e0eb,
      -3em 3em 0 #e0e0eb, 0em 4.5em 0 #e0e0eb, 1.5em 3em 0 #e0e0eb, 1.5em 1.5em 0 #e0e0eb, 3em 2.2em 0 #e0e0eb;
  }
}
@mixin arrow_icon--active {
  &::after {
    background: #000;
    box-shadow: 0 1.5em 0 #000, -1.5em 1.5em 0 #000, -3em 1.5em 0 #000, 0 3em 0 #000, -1.5em 3em 0 #000, -3em 3em 0 #000,
      0em 4.5em 0 #000, 1.5em 3em 0 #000, 1.5em 1.5em 0 #000, 3em 2.2em 0 #000;
  }
}

.projects {
  .pro__item {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    font-size: 18px;
    max-width: 500px;
    width: 100%;
    box-sizing: border-box;
    .logo {
      height: 30px;
      width: 30px;
    }
    &-name {
      flex: 1;
      padding: 0 15px;
      text-align: left;
    }
    &:hover {
      .arrow_icon {
        @include arrow_icon--active;
      }
    }
  }
}
</style>
