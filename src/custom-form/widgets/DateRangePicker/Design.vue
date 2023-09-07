<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-date-picker :type="type" range-separator="-" />
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="DateRangePickerDesign">
import Widget from './Widget';
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';

const props = defineProps<{ widget: Widget }>();
const type = computed(() => props.widget.ifShowTime ? 'datetimerange' : 'daterange');
const value = computed(() => props.widget.defaultValue == 'Now' ? new Date() : undefined);

</script>
