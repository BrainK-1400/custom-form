<template>
  <div class="display-form">
    <WidgetContainer :widgets="form.widgets"></WidgetContainer>
  </div>
</template>

<script setup lang="ts" name="FormDisplay">
import WidgetContainer from './WidgetContainer.vue';
import { DisplayForm } from '../core';

interface Props {
  form: DisplayForm;
}

defineProps<Props>();
</script>

<style lang="less" scoped>
.display-form {
  border: 1px solid #eee;
}
</style>
