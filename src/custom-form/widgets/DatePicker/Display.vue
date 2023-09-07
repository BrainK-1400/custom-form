<template>
  <WidgetLayout :widget="widget">
    <el-date-picker :disabled="!widget.isEditable" :type="type" :value-format="format" :placeholder="widget.placeholder"
      clearable v-model="widget.model.value" />
  </WidgetLayout>
</template>

<script setup lang="ts">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

const props = defineProps<{ widget: Widget }>();
const format = computed(() => (props.widget.ifShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'));
const type = computed(() => props.widget.ifShowTime ? 'datetime' : 'date');

</script>
