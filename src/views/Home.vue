<template>
  <div class="home-page">
    <div class="app-container">
      <div class="app-container-area--left">
        <slot name="leftArea">
          <!-- <iframe :src="bgVideoUrl" frameborder="0" height="100%" width="100%"></iframe> -->
          <video class="bg_video" autoplay loop muted :poster="bgVideoPosterUrl">
            <source :src="bgVideoUrl" type="video/mp4" />
          </video>
        </slot>
      </div>
      <div class="app-container-area--right">
        <slot name="rightArea">
          <div class="app-navbar" v-if="navOpts.length">
            <div
              v-for="item in navOpts"
              :key="item.name"
              class="app-navbar__item"
              :class="{ active: item.name === activeNav }"
              @click="clickNav(item.name)"
            >
              <span class="app-navbar__item--text">{{ item.name }}</span>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { BACKGROUND_VIDEO_URL, BACKGROUND_VIDEO_POSTER_URL } from '@/utils/static';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      navOpts: [{ name: 'HOME' }, { name: 'PROJECTS' }, { name: 'ARTICLES' }],
      activeNav: '',
      bgVideoUrl: BACKGROUND_VIDEO_URL,
      bgVideoPosterUrl: BACKGROUND_VIDEO_POSTER_URL,
    };
  },
  created() {
    this.init();
  },
  activated() {},
  methods: {
    init() {
      this.activeNav = this.navOpts[0] && this.navOpts[0].name;
    },
    clickNav(nav) {
      this.activeNav = nav;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  .app-container {
    width: 100%;
    height: 100%;
    &-area {
      &--left,
      &--right {
        width: 50%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
.app-navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  &__item {
    margin: 0 15px;
    cursor: pointer;
    line-height: 30px;
    letter-spacing: 0.8px;
    height: 100%;
    font-weight: lighter;
    transition: font-weight ease-in 0.3s;
    width: 90px;
    &--text {
      display: inline-block;
      position: relative;
      background-image: linear-gradient(90deg, #39394d, #7f5cca);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--text::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #39394d, #7f5cca);
      transition: all ease-in 0.2s;
      border-radius: 2px;
    }
    &.active,
    &:hover {
      font-weight: 600;
      .app-navbar__item--text::after {
        width: 100%;
        left: 0;
      }
    }
  }
}
</style>
