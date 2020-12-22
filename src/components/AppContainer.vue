<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:53:19
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-22 16:47:01
-->
<template>
  <div class="app-container">
    <div class="app-container-area--left">
      <slot name="leftArea"> </slot>
    </div>
    <div class="app-container-area--right">
      <slot name="rightArea">
        <app-navbar></app-navbar>
        <slot name="pageContent"> </slot>
      </slot>
    </div>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar';
export default {
  components: {
    AppNavbar,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  &-area {
    &--left,
    &--right {
      width: 50%;
      height: 100%;
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
  }
}
</style>
