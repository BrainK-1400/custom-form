<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-select :placeholder="widget.placeholder" :options="options" style="width: 100%">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="DropdownListDesign">
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
