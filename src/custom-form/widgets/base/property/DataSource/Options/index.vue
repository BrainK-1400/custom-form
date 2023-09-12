<template>
  <div class="option-config">
    <el-alert v-if="options.length == 0" title="没有选项" type="warning" :closable="false" style="margin:5px 0px;" />

    <el-select v-else placeholder="选项" :options="options" style="width: 100%">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <div style="padding:5px 0px;">
      <el-button type="primary" size="small" @click="visibleDialog = true">配置</el-button>
    </div>
    <OptionConfigDialog v-model="visibleDialog" :options="options" @ok="onOk"></OptionConfigDialog>
  </div>
</template>
  
<script setup lang='ts'>
import type { Option } from '@cf/core';
import OptionConfigDialog from './OptionConfigDialog.vue';

const props = defineProps<{ options: Array<Option> }>();

const visibleDialog = ref(false);

const onOk = (newOptions: Array<Option>) => {
  props.options.splice(0, props.options.length, ...newOptions);
}
</script>
  
<style></style>