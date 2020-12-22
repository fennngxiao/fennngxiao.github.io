<!--
 * @Author: FengXiao
 * @Date: 2020-12-22 15:30:31
 * @LastEditors: FengXiao
 * @LastEditTime: 2020-12-22 17:10:01
-->
<template>
  <app-container>
    <template #pageContent>
      <div>文章</div>
    </template>
  </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer';
export default {
  name: 'Articles',
  components: {
    AppContainer,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
