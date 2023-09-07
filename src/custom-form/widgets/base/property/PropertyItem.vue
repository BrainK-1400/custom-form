<template>
  <div class="property">
    <div class="property-label">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  label: string
}>();

</script>

<style lang="less" scoped>
.property {
  border-bottom: 1px solid #e1e1e1;
  margin: 0px 10px 10px 10px;
  padding: 0px 0px 10px 0px;

  .property-label {
    font-size: 13px;
    height: 32px;
    line-height: 32px;
  }
}
</style>
