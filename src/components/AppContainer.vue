<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:53:19
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-23 16:49:49
-->
<template>
  <div class="app-container">
    <div class="app-container-area--left">
      <slot name="leftArea"> </slot>
    </div>
    <div class="app-container-area--right">
      <slot name="rightArea">
        <app-navbar></app-navbar>
        <div class="page-content__base">
          <slot name="pageContent"> </slot>
        </div>
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
      height: 100%;
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
    &--left {
      width: 60%;
    }
    &--right {
      width: 40%;
      height: 100%;
      .page-content__base {
        height: calc(100% - 62px);
      }
    }
  }
}
</style>
