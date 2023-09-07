<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-input :placeholder="widget.placeholder" v-model="widget.defaultValue" :allowClear="true" />
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="SingleTextDesign">
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';
import Widget from './Widget';

const props = defineProps<{ widget: Widget }>();
</script>
