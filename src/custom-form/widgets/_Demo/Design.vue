<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <!--设计视图-->
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts">
import Widget from './Widget';
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue'; x

defineProps<{
  widget: Widget
}>();
</script>

<style lang="less" scoped></style>
