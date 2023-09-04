<template>
  <PropertyLayout>
    <template #common>
      <PropertyItem label="控件名称">
        <a-input v-model:value="props.label" />
      </PropertyItem>
      <PropertyItem label="水印">
        <a-input v-model:value="props.placeholder" />
      </PropertyItem>
      <PropertyItem label="单位">
        <a-input v-model:value="props.unit" />
      </PropertyItem>
      <PropertyItem label="默认值">
        <a-input-number v-model:value="props.defaultValue" />
      </PropertyItem>
      <PropertyItem label="填写说明">
        <a-textarea :rows="4" v-model:value="props.description" />
      </PropertyItem>
    </template>
  </PropertyLayout>
</template>

<script setup lang="ts">
import Model from './Model';

const props = defineProps<{
  widget: Model
}>();
</script>
./Widget