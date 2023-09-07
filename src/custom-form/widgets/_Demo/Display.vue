<template>
  <WidgetLayout :widget="widget">
    <!--显示视图-->
  </WidgetLayout>
</template>

<script setup lang="ts">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

defineProps<{
  widget: Widget
}>();

</script>
