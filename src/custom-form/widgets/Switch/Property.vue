<template>
  <PropertyLayout :showBusinessTab="true">
    <template #common>
      <PropertyItem label="控件名称">
        <el-input v-model="widget.label" />
      </PropertyItem>
      <PropertyItem label="默认值">
        <el-switch v-model="widget.defaultValue" />
      </PropertyItem>
      <PropertyItem label="活动状态文字">
        <el-input v-model="widget.activeText" />
      </PropertyItem>
      <PropertyItem label="非活动状态文字">
        <el-input v-model="widget.inactiveText" />
      </PropertyItem>
      <PropertyItem label="填写说明">
        <el-input type="textarea" :rows="4" v-model="widget.description" />
      </PropertyItem>
    </template>
    <template #business>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts" name="SwitchProperty">
import Widget from './Widget';
import PropertyLayout from '../base/property/PropertyLayout.vue';
import PropertyItem from '../base/property/PropertyItem.vue';

defineProps<{ widget: Widget }>();
</script>
