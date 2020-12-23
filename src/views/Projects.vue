<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:30:31
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-23 16:50:48
-->
<template>
  <app-container>
    <template #leftArea>
      <div class="project_intro">
        <div class="project_intro--bg">
          <img :src="curPro.cover" />
        </div>
        <div class="project_intro-content">
          <H2>{{ curPro.name }}</H2>
        </div>
      </div>
    </template>
    <template #pageContent>
      <div class="projects" v-if="dataList.length">
        <div class="projects__tips">独立完成的一些项目</div>
        <template v-for="cate in dataList">
          <div class="category__item" :key="cate.category">{{ cate.category }}</div>
          <template v-for="pro in cate.children">
            <div class="pro__item" :key="pro.name" @click="onProClick(pro)">
              <img :src="pro.logo" alt="" class="logo" />
              <span class="pro__item-name">{{ pro.name }}</span>
              <i class="arrow_icon"></i>
            </div>
          </template>
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
      proUrl: '',
      curPro: {},
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
      this.dataList = [
        {
          category: 'Web',
          children: [{ name: '一席', logo: require('../assets/imgs/yixi_logo.png'), url: 'http://www.yixi.tv' }],
        },
        {
          category: 'H5',
          children: [
            { name: '戴姆勒Lab1886', logo: require('../assets/imgs/dml_logo.png'), url: '' },
            { name: '联丰爱机保', logo: require('../assets/imgs/dml_logo.png'), url: '' },
          ],
        },
        {
          category: '微信小程序',
          children: [
            { name: '现代新理念英语', logo: require('../assets/imgs/dml_logo.png'), cover: '' },
            { name: 'future-lab', logo: require('../assets/imgs/dml_logo.png'), cover: '' },
            { name: '荣仪乐声', logo: require('../assets/imgs/dml_logo.png'), cover: '' },
            { name: '小蒙之家', logo: require('../assets/imgs/dml_logo.png'), cover: '' },
          ],
        },
      ];
    },
    onProClick(data) {
      this.curPro = data;
      // window.open(data.url, '__block');
    },
  },
};
</script>

<style lang="scss" scoped>
iframe {
  width: 200%;
  height: 200%;
  transform: scale(0.5) translate(-50%, -50%);
}
$arrow_icon--color: #e0e0eb;
$arrow_icon--active-color: #e91e80;
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
    background: $arrow_icon--color;
    box-shadow: 0 1.5em 0 $arrow_icon--color, -1.5em 1.5em 0 $arrow_icon--color, -3em 1.5em 0 $arrow_icon--color,
      0 3em 0 $arrow_icon--color, -1.5em 3em 0 $arrow_icon--color, -3em 3em 0 $arrow_icon--color, 0em 4.5em 0 $arrow_icon--color,
      1.5em 3em 0 $arrow_icon--color, 1.5em 1.5em 0 $arrow_icon--color, 3em 2.2em 0 $arrow_icon--color;
  }
}
@mixin arrow_icon--active {
  &::after {
    background: $arrow_icon--active-color;
    box-shadow: 0 1.5em 0 $arrow_icon--active-color, -1.5em 1.5em 0 $arrow_icon--active-color,
      -3em 1.5em 0 $arrow_icon--active-color, 0 3em 0 $arrow_icon--active-color, -1.5em 3em 0 $arrow_icon--active-color,
      -3em 3em 0 $arrow_icon--active-color, 0em 4.5em 0 $arrow_icon--active-color, 1.5em 3em 0 $arrow_icon--active-color,
      1.5em 1.5em 0 $arrow_icon--active-color, 3em 2.2em 0 $arrow_icon--active-color;
  }
}

.projects {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &__tips {
    text-align: center;
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 100px;
  }
  .pro__item {
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    padding: 25px 15px;
    box-sizing: border-box;
    font-size: 18px;
    margin: 0 auto;
    cursor: pointer;
    .logo {
      // height: 30px;
      width: 30px;
    }
    &-name {
      // flex: unset;
      min-width: 120px;
      padding: 0 15px;
      text-align: left;
      white-space: nowrap;
      transition: all ease-out 0.5s;
      margin-right: 50px;
    }
    &:hover {
      .pro__item-name {
        flex: 1;
        color: #e91e80;
      }
      .arrow_icon {
        @include arrow_icon--active;
      }
    }
  }
}
</style>
