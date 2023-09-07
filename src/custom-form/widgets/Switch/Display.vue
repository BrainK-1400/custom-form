<template>
  <WidgetLayout :widget="widget">
    <el-switch :disabled="!widget.isEditable" v-model="widget.model.value" :activeText="widget.activeText"
      :inactiveText="widget.inactiveText" />
  </WidgetLayout>
</template>

<script setup lang="ts" name="SwitchDisplay">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

defineProps<{ widget: Widget }>();

</script>
