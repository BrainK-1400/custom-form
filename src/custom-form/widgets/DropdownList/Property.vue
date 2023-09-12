<template>
  <PropertyLayout :showBusinessTab="true">
    <template #common>
      <PropertyItem label="控件名称">
        <el-input v-model="widget.label" />
      </PropertyItem>
      <PropertyItem label="水印">
        <el-input v-model="widget.placeholder" />
      </PropertyItem>
      <PropertyItem label="数据源配置">
        <DataSource :dataSource="widget.dataSource"></DataSource>
      </PropertyItem>
      <PropertyItem label="填写说明">
        <el-input type="textarea" :rows="4" v-model="widget.description" />
      </PropertyItem>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts" name="DropdownListProperty">
import Widget from './Widget';
import PropertyLayout from '../base/property/PropertyLayout.vue';
import PropertyItem from '../base/property/PropertyItem.vue';
import DataSource from '../base/property/DataSource/index.vue'

defineProps<{ widget: Widget }>();
</script>
