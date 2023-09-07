<template>
  <WidgetLayout :widget="widget">
    <el-input :disabled="!widget.isEditable" v-model="widget.model.value" :placeholder="widget.placeholder"
      clearable></el-input>
  </WidgetLayout>
</template>

<script setup lang="ts" name="SingleTextDisplay">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

defineProps<{ widget: Widget }>();

</script>
