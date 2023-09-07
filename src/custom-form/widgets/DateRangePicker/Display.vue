<template>
  <WidgetLayout :widget="widget">
    <el-date-picker :disabled="!widget.isEditable" :type="type" :value-format="format" range-separator="-" clearable
      v-model="modelValue" @change="onChange" />
  </WidgetLayout>
</template>

<script setup lang="ts" name="DateRangePickerDisplay">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

const props = defineProps<{ widget: Widget }>();
const format = computed(() => (props.widget.ifShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'));
const type = computed(() => props.widget.ifShowTime ? 'datetimerange' : 'daterange');

const modelValue = ref(['', ''] as [string, string]);
watch(() => props.widget.model, () => modelValue.value = [props.widget.model.start, props.widget.model.finish], { deep: true });

function onChange(arr: null | [string, string]) {
  if (arr) {
    props.widget.model.start = arr[0];
    props.widget.model.finish = arr[1];
  }
  else {
    props.widget.model.start = '';
    props.widget.model.finish = '';
  }
}
</script>
