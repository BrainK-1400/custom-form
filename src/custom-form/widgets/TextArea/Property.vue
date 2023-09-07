<template>
  <PropertyLayout>
    <template #common>
      <PropertyItem label="控件名称">
        <el-input v-model="widget.label" />
      </PropertyItem>
      <PropertyItem label="默认值">
        <el-input type="textarea" v-model="widget.defaultValue" />
      </PropertyItem>
      <PropertyItem label="默认行高">
        <el-input-number v-model="widget.rows" :step="1" :min="2" />
      </PropertyItem>
      <PropertyItem label="水印">
        <el-input type="textarea" v-model="widget.placeholder" />
      </PropertyItem>
      <PropertyItem label="填写说明">
        <el-input type="textarea" :rows="4" v-model="widget.description" />
      </PropertyItem>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts" name="TextareaProperty">
import Widget from './Widget';
import PropertyLayout from '../base/property/PropertyLayout.vue';
import PropertyItem from '../base/property/PropertyItem.vue';

defineProps<{ widget: Widget }>();
</script>
