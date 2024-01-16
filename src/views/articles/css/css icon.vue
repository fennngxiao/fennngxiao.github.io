<template>
  <div class="page-content">
    <div class="page-title">CSS 图标</div>
    <div class="size-change">
      <span>大小调节( transform: scale({{ iconSize }}) )：</span>
      <el-slider v-model="iconSize" :min="0.1" :max="1" :step="0.1" show-input />
    </div>
    <div class="icons">
      <i v-for="icon in icons" :key="icon" :class="icon" :style="{ transform: `scale(${iconSize})` }">
      </i>
    </div>
  </div>
</template>
<script>
import { ElSlider } from 'element-plus'
export default {
  components: {
    ElSlider,
  },
  data() {
    return {
      iconSize: 1
    }
  },
  created() {
    this.icons = ['arrow-right', 'arrow-left', 'arrow-top', 'arrow-bottom', 'position', 'bingo'];
  },
}
</script>
<style lang="scss" scoped>
$red: #f60018;

.size-change {
  width: 500px;
}

.icons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &>i {
    margin: 8px;
  }
}

.arrow-bottom {
  width: 0;
  height: 0;
  border-width: 20px;
  border-color: #333 transparent transparent transparent;
  border-style: solid dashed dashed dashed;
}

.arrow-right {
  width: 0;
  height: 0;
  border-width: 20px;
  border-color: transparent #333 transparent transparent;
  border-style: dashed solid dashed dashed;
}

.arrow-top {
  width: 0;
  height: 0;
  border-width: 20px;
  border-color: transparent transparent #333 transparent;
  border-style: dashed dashed solid dashed;
}

.arrow-left {
  width: 0;
  height: 0;
  border-width: 20px;
  border-color: transparent transparent transparent #333;
  border-style: dashed dashed dashed solid;
}

.position {
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  background: $red;

  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: ' ';
    display: block;
    position: absolute;
    top: 53px;
    left: 50%;
    border-top-width: 40px;
    border-right-width: 30px;
    border-left-width: 30px;
    border-color: $red transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    transform: translateX(-50%);
  }
}

.bingo {
  background: $red;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: relative;

  &:before {
    position: absolute;
    content: ' ';
    top: 33%;
    left: 52%;
    width: 20px;
    border-top: 4px solid rgba(255, 255, 255, 100);
    transform: rotate(-45deg) translate(-50%, 0%);
    border-radius: 1px;
  }

  &:after {
    position: absolute;
    content: ' ';
    width: 12px;
    top: 55%;
    left: 35%;
    border-top: 4px solid;
    transform: rotate(45deg) translate(-50%, 0%);
    border-radius: 1px;
    border-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.6)) 2;
  }
}
</style>