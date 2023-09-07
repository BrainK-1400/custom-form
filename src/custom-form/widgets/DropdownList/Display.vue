<template>
  <WidgetLayout :widget="widget">
    <el-select v-model="widget.model.option" value-key="value" style="width: 100%">
      <el-option v-for="item in widget.options" :key="item.value" :label="item.label" :value="item" />
    </el-select>
  </WidgetLayout>
</template>

<script setup lang="ts" name="DropdownListDisplay">
import Widget from './Widget'
import WidgetLayout from '../base/WidgetLayout.vue';

const props = defineProps<{ widget: Widget }>();

</script>
