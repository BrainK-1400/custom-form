<template>
  <PropertyLayout>
    <template #common>
      <PropertyItem label="控件名称">
        <el-input v-model="widget.label" />
      </PropertyItem>
      <PropertyItem label="水印">
        <el-input v-model="widget.placeholder" />
      </PropertyItem>
      <PropertyItem label="是否显示时间">
        <el-switch v-model="widget.ifShowTime" />
      </PropertyItem>
      <PropertyItem label="默认值">
        <el-select v-model="widget.defaultValue" placeholder="选择" :clearable="true" style="width: 100%">
          <el-option label="当前日期/时间" value="Now">
          </el-option>
        </el-select>
      </PropertyItem>
      <PropertyItem label="填写说明">
        <el-input type="textarea" :rows="4" v-model="widget.description" />
      </PropertyItem>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts" name="DatePickerProperty">
import Widget from './Widget';
import PropertyLayout from '../base/property/PropertyLayout.vue';
import PropertyItem from '../base/property/PropertyItem.vue';

defineProps<{ widget: Widget }>();
</script>
