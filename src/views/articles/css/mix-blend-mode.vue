<template>
  <div class="page-content">
    <div class="bl"></div>
    <p>
      核心代码：mix-blend-mode: difference
      <br />
      <br /> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode">其他各种值的效果详见mdn</a>
      <br /> mix-blend-mode CSS 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。它有以下属性值：
      <br />normal：正常
      <br />multiply：正片叠底
      <br />screen：滤色
      <br />overlay：叠加
      <br />darken：变暗
      <br />lighten：变亮
      <br />color-dodge：颜色减淡
      <br />color-burn：颜色加深
      <br />hard-light：强光
      <br />soft-light：柔光
      <br />difference：差值
      <br />exclusion：排除
      <br />hue：色相
      <br />saturation：饱和度
      <br />color：颜色
      <br />luminosity：亮度
      <br />initial：初始
      <br />inherit：继承
      <br />unset：复原

    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bl {
  position: relative;
  height: 300px;
  background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
  width: 600px;
  border: 2px solid #333;

  &::before {
    content: "TEST TEXT";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    white-space: nowrap;
    mix-blend-mode: difference;
    animation: move 3s infinite linear alternate;
  }
}

@keyframes move {
  0% {
    transform: translate(-80%, -50%);
  }

  100% {
    transform: translate(-20%, -50%);
  }
}
</style>