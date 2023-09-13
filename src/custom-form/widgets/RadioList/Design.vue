<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-radio-group>
        <el-radio v-for="option in options" :label="option.value" size="large">{{ option.label }}</el-radio>
      </el-radio-group>
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts">
import Widget from './Widget';
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';

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
</script>
