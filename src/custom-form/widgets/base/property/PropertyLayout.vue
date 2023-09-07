<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="基本属性" name="base" class="view-area">
      <slot name="common"></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
const activeName = ref('base')
</script>

