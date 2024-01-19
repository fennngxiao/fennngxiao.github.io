<template>
  <div class="page-content">
    <h2>mix-blend-mode: difference</h2>
    <div class="bl"></div>
    <p>
      <br /> mix-blend-mode CSS属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。
      <br />它有以下属性值：

      <el-table :data="tableData" border style="width: 300px">
        <el-table-column :prop="col.prop" :label="col.label" v-for="col in columns" :key="col.prop" />
      </el-table>
      <br /> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode">其他各种值的效果详见MDN</a>
    </p>
  </div>
</template>

<script setup>
const tableData = [
  { key: 'normal', value: '正常' },
  { key: 'multiply', value: '正片叠底' },
  { key: 'screen', value: '滤色' },
  { key: 'overlay', value: '叠加' },
  { key: 'darken', value: '变暗' },
  { key: 'lighten', value: '变亮' },
  { key: 'color-dodge', value: '颜色减淡' },
  { key: 'color-burn', value: '颜色加深' },
  { key: 'hard-light', value: '强光' },
  { key: 'soft-light', value: '柔光' },
  { key: 'difference', value: '差值' },
  { key: 'exclusion', value: '排除' },
  { key: 'hue', value: '色相' },
  { key: 'saturation', value: '饱和度' },
  { key: 'color', value: '颜色' },
  { key: 'luminosity', value: '亮度' },
  { key: 'initial', value: '初始' },
  { key: 'inherit', value: '继承' },
  { key: 'unset', value: '复原' },
];
const columns = [
  { prop: 'key', label: '值' },
  { prop: 'value', label: '描述' },
]
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