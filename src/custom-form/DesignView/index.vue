
<template>
  <div class="design-view">
    <div class="left">
      <WidgetTempalteList :form="form"></WidgetTempalteList>
    </div>
    <div class="center">
      <div class="form-view-area">
        <WidgetContainer :widgets="form.widgets"></WidgetContainer>
      </div>
    </div>
    <div class="right">
      <el-empty class="margin-mini" v-if="form.selectedWidget == null" description="选择一个控件来配置属性"></el-empty>
      <component v-else :key="form.selectedWidget._key" :is="form.selectedWidget.type + 'Property'"
        :widget="form.selectedWidget"></component>
    </div>
  </div>
</template>

<script setup lang="ts" name="DesignForm">
import WidgetTempalteList from './WidgetTempalteList.vue'
import WidgetContainer from './WidgetContainer.vue'
import { DesignForm } from '@cf/core';

defineProps<{
  form: DesignForm
}>();

</script>

<script lang="ts">
import { propertyViewMap } from '@cf/widgets';

export default defineComponent({
  name: 'FormDesign',
  components: {
    ...propertyViewMap,
  },
});
</script>

<style lang="less" scoped>
.left {
  flex: 0 0 150px;
  overflow: auto;
}

.center {
  flex: auto;
  display: flex;

  .form-view-area {
    flex: auto;
    overflow-y: scroll;
    background: #fafafa;
    padding: 10px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
  }
}

.right {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .property-header {
    flex: 0 0 30px;
    text-align: center;
    line-height: 30px;
    border-bottom: 1px solid #f1cdcd;
  }

  .property-content {
    padding: 5px 0px;
    flex: auto;
    overflow: auto;
  }
}
</style>
