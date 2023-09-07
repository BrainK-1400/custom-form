<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-switch :modelValue="widget.defaultValue" :activeText="widget.activeText" :inactiveText="widget.inactiveText" />
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="SwitchDesign">
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';
import Widget from './Widget';

const props = defineProps<{ widget: Widget }>();
</script>
