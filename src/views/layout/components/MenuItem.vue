<template>
  <el-menu-item
    v-if="!data.children || !data.children.length"
    :index="data.id || `${data.category}_${data.name}`"
  >
    {{ data.name }}
  </el-menu-item>
  <el-sub-menu v-else :index="data.id || `${data.category}_${data.name}`">
    <template #title>
      <span>{{ data.name }}</span>
    </template>
    <MenuItem v-for="child in data.children" :key="child.path" :data="child" />
  </el-sub-menu>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
