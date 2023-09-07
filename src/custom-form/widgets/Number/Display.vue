<template>
  <WidgetLayout :widget="widget">
    <el-input-number :disabled="widget.isEditable" :placeholder="widget.placeholder" v-model="widget.model.value"
      style="width: 140px" />
    <span v-if="widget.unit" style="margin-left: 5px;">
      {{ widget.unit }}
    </span>
  </WidgetLayout>
</template>

<script setup lang="ts">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

defineProps<{
  widget: Widget
}>();

</script>
