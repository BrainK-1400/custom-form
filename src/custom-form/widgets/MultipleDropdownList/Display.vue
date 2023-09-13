<template>
  <WidgetLayout :widget="widget">
    <el-select :model-value="widget.model.options" value-key="value" style="width: 100%" @change="onChange" multiple>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" />
    </el-select>
  </WidgetLayout>
</template>

<script setup lang="ts">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';
import { Option } from '@cf/core';

const props = defineProps<{ widget: Widget }>();

const options = computed(() => {
  if (props.widget.dataSource.mode == 'options') {
    return props.widget.dataSource.options;
  }
  if (props.widget.dataSource.mode == 'remoteKey') {
    return [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' },]
  }
  return [];
})

const onChange = function (options: Array<Option>) {
  props.widget.model.options = options;
}
</script>
