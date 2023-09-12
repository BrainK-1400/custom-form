<template>
  <div>
    <el-radio-group v-model="dataSource.mode" size="small">
      <el-radio-button label="options">候选项</el-radio-button>
      <el-radio-button label="remoteKey">后台数据</el-radio-button>
    </el-radio-group>
    <Options v-if="dataSource.mode == 'options'" :options="dataSource.options" style="padding: 5px 0px;"></Options>
  </div>
</template>
    
<script setup lang='ts'>
import Options from './Options/index.vue'
import type { DataSource } from '@/custom-form/core';
defineProps<{
  dataSource: DataSource
}>();
</script>
    
<style></style>