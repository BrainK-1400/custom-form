<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-input type="textarea" :placeholder="widget.placeholder" v-model="widget.defaultValue" :rows="widget.rows" />
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="TextareaDesign">
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';
import Widget from './Widget';

const props = defineProps<{ widget: Widget }>();
</script>
