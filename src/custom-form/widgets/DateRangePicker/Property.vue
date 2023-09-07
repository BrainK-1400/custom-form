<template>
  <PropertyLayout>
    <template #common>
      <PropertyItem label="控件名称">
        <el-input v-model="widget.label" />
      </PropertyItem>
      <PropertyItem label="是否显示时间">
        <el-switch v-model="widget.ifShowTime" />
      </PropertyItem>
      <PropertyItem label="填写说明">
        <el-input type="textarea" :rows="4" v-model="widget.description" />
      </PropertyItem>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts" name="DateRangePickerDesign">
import Widget from './Widget';
import PropertyLayout from '../base/property/PropertyLayout.vue';
import PropertyItem from '../base/property/PropertyItem.vue';

defineProps<{ widget: Widget }>();
</script>
