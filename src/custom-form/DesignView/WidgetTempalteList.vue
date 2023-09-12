<template>
  <div class="widget-template-list">
    <div class="widget-group" v-for="group in groups">
      <div class="widget-group-header">{{ group.name }}</div>
      <VueDraggableNext class="widget-list" :list="group.children" :group="{ name: 'widget', pull: 'clone', put: false }"
        :sort="false" :clone="clone">
        <div class="widget" v-for="widget in group.children">
          <span class="widget-icon" :key="widget.type">
            <el-icon :size="18">
              <component :is="widget.icon" />
            </el-icon>
          </span>
          <div class="widget-label">{{ widget.label }}</div>
        </div>
      </VueDraggableNext>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { DesignForm } from '@cf/core/index';
import { createWidget } from '@cf/widgets';

const props = defineProps<{
  form: DesignForm
}>();

const groups = ref([
  {
    name: '基础控件',
    children: [
      { type: 'SingleText', label: '单行文本', icon: 'EditPen' },
      { type: 'TextArea', label: '多行文本', icon: 'Edit' },
      { type: 'Number', label: '数字', icon: 'Plus' },
      { type: 'Switch', label: '开关', icon: 'TurnOff' },
      // { type: 'RadioList', label: '单选列表', icon: 'Edit' },
      { type: 'DropdownList', label: '单选下拉列表', icon: 'Select' },
      { type: 'DatePicker', label: '日期/时间', icon: 'Timer' },
      {
        type: 'DateRangePicker',
        label: '日期/时间范围',
        icon: 'Timer'
      }
    ]
  }
]);

const clone = (widget: { type: string }) => {
  return createWidget(props.form, widget.type);
};
</script>

<style lang="less" scoped>
.sortable-ghost {
  height: 0px;
  overflow: hidden;
  outline: 1px solid red;
  border: 1px solid red;
}

.widget-template-list {
  height: 100%;
  font-size: 12px;
  background-color: white;
  user-select: none;

  .widget-group {
    .widget-group-header {
      padding: 8px 12px 0px 12px;
      font-size: 13px;
    }

    .widget-list {
      margin: 0px;
      padding: 5px;

      .widget {
        display: flex;
        align-items: center;
        margin: 4px 0px;
        cursor: move;
        border: 1px solid #f4f6fc;
        background: #f4f6fc;
        height: 30px;

        &:hover {
          color: #409eff;
          border: 1px dashed #409eff;
        }

        .widget-icon {
          flex: 0 0 30px;
          display: flex;
          justify-content: center;
          font-size: 16px;
        }

        .widget-label {
          flex: auto;
        }
      }
    }
  }
}
</style>
