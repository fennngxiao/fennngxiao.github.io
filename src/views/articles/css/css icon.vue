<template>
  <div class="page-content">
    <div class="page-title">CSS 绘制图标</div>
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
    this.icons = ['arrow-right', 'arrow-left', 'arrow-top', 'arrow-bottom', 'position', 'bingo', 'plus', 'heart', 'camera'];
  },
}
</script>
<style lang="scss" scoped>
$red: #f60018;
$black: #333;

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

.plus {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;

  &::after {
    display: inline-block;
    content: " ";
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: $black;
    box-shadow: 0 -20px 0 $black,
      0 20px 0 $black,
      -20px 0 0 $black,
      20px 0 0 $black;
  }
}

i.heart {
  display: inline-block;
  width: 0px;
  height: 0px;
  background: green;
  margin-left: 50px;
  margin-right: 50px;

  &::before,
  &::after {
    position: absolute;
    width: 50px;
    height: 75px;
    background: $black;
    border-radius: 50% 50% 0 0;
    content: '';
    top: -36px;
  }

  &::before {
    transform: rotate(48deg);
    transform-origin: 100% 100%;
    right: 0;
    background: $black;
    z-index: 5;
  }

  &::after {
    transform: rotate(-48deg);
    transform-origin: 0 100%;
    left: 0;
  }
}

.camera {
  display: inline-block;
  border-style: solid;
  border-width: 40px 58px;
  border-radius: 10px;
  color: $black;
}

.camera:before {
  position: absolute;
  top: -15px;
  left: -28px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 0 0 8px, 0 0 0 16px #fff;
  content: "";
}

.camera:after {
  position: absolute;
  top: -30px;
  left: 30px;
  width: 15px;
  border-top: 8px solid #fff;
  content: "";
}
</style>