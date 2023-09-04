<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <a-input-number :placeholder="widget.placeholder" :value="widget.defaultValue" style="width:140px" />
      <span class="margin-left-mini">{{ widget.unit }}</span>
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts">
import WidgetDecorator from '../_base/design/WidgetDecorator.vue';
import WidgetLayout from '../_base/WidgetLayout.vue';
import Widget from './Widget';

defineProps<{
  widget: Widget
}>();
</script>

<style lang="less" scoped></style>
