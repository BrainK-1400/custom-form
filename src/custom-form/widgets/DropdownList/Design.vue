<template>
  <WidgetDecorator :widget="widget">
    <WidgetLayout :widget="widget" :isDesign="true">
      <el-select :modelValue="value" :options="options" style="width: 100%">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </WidgetLayout>
  </WidgetDecorator>
</template>

<script setup lang="ts" name="DropdownListDesign">
import Widget from './Widget';
import WidgetDecorator from '../base/design/WidgetDecorator.vue';
import WidgetLayout from '../base/WidgetLayout.vue';
const props = defineProps<{ widget: Widget }>();

const options = computed(() => props.widget.can)
</script>
