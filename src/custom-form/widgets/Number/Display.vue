<template>
  <WidgetLayout :widget="widget">
    <Readonly v-if="!widget.isEditable" :text="text"></Readonly>
    <div v-else>
      <a-input-number :placeholder="widget.placeholder" :disabled="!widget.isEditable" v-model:value="widget.model.value"
        style="width: 140px" />
      <span v-if="widget.unit" class="margin-left-mini">
        {{ widget.unit }}
      </span>
    </div>
  </WidgetLayout>
</template>

<script>
import Widget from './Widget';
import { mixin } from '../_base/display';
import { isNil } from 'lodash';
export default {
  name: 'NumberDisplay',
  mixins: [mixin],
  props: {
    widget: {
      type: Widget,
      required: true
    }
  },
  computed: {
    text() {
      let number = isNil(this.widget.model.value) ? '' : this.widget.model.value.toString();
      if (this.widget.unit) {
        return `${number} ${this.widget.unit}`;
      }
      return number;
    }
  }
};
</script>
