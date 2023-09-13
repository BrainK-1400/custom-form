<template>
  <WidgetLayout :widget="widget">
    <el-radio-group :model-value="widget.model.option?.value" @change="onChange">
      <el-radio v-for="option in options" :label="option.value" size="large">{{ option.label }}</el-radio>
    </el-radio-group>
  </WidgetLayout>
</template>

<script setup lang="ts">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';
import { isNil } from 'lodash-es';

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

const onChange = function (value: string | number | boolean) {
  if (isNil(value)) {
    props.widget.model.option = null;
  } else {
    props.widget.model.option = options.value.find(o => o.value == value);
  }
}
</script>
