<template>
  <VueDraggableNext class="widget-container" :list="widgets" :sort="true" :animation="200"
    :group="{ name: 'widget', put: ['widget'] }" handle=".widget-drag">
    <template v-for="widget in widgets">
      <component :is="widget.type + 'Design'" :widget="widget"></component>
    </template>
  </VueDraggableNext>
</template>

<script  lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { Widget } from '../core';
import { designViewMap } from '../widgets';

export default defineComponent({
  name: 'DesignWidgetContainer',
  components: {
    VueDraggableNext,
    ...designViewMap,
  },
  props: {
    widgets: {
      type: Array<Widget>,
      required: true,
    },
  },
});

</script>

<style lang="less" scoped>
.widget-container {
  min-height: 600px;
  // border: 1px dashed #999;
  background: #fff;
  margin-bottom: 16px;
}
</style>
