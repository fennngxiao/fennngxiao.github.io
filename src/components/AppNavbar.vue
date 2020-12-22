<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:54:18
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-22 17:13:19
-->
<template>
  <div class="app-navbar">
    <div
      v-for="item in navs"
      :key="item.name"
      class="app-navbar__item"
      :class="{ active: item.name === activeNav || item.path === activeNav }"
      @click="clickNav(item)"
    >
      <span class="app-navbar__item--text">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: 'HOME', path: '/home' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'ARTICLES', path: '/articles' },
      ],
      activeNav: '',
    };
  },
  created() {
    this.activeNav = this.$store.state.activeNav || this.$route.path;
  },
  methods: {
    clickNav(nav) {
      this.$router.push(nav.path);
      this.$store.commit('setActiveNav', nav.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  &__item {
    margin: 0 15px;
    cursor: pointer;
    letter-spacing: 0.8px;
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
