<template>
  <template v-for="widget in widgets" :key="widget._key">
    <component :is="widget.type + 'Display'" :widget="widget"></component>
  </template>
</template>

<script lang="ts">
import { displayViewMap } from '../widgets';
import { Widget } from '../core';

export default defineComponent({
  name: 'DisplayWidgetContainer',
  components: {
    ...displayViewMap,
  },
  props: {
    widgets: {
      type: Array<Widget>,
      required: true,
    },
  },
});
</script>
