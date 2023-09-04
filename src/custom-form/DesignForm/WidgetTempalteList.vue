<template>
  <div class="widget-template-list">
    <div class="widget-group">
      <div class="widget-group-header">布局控件</div>
      <div class="widget-list">
        <div class="widget" v-for="widget in containerWidgets">
          <span class="widget-icon">
            <el-icon :size="18">
              <component :is="widget.icon" />
            </el-icon>
          </span>
          <div class="widget-label">{{ widget.label }}</div>
        </div>
      </div>
    </div>
    <div class="widget-group" v-for="group in normalWidgetGroups">
      <div class="widget-group-header">{{ group.name }}</div>
      <div class="widget-list">
        <div class="widget" v-for="widget in group.children">
          <span class="widget-icon">
            <el-icon :size="18">
              <component :is="widget.icon" />
            </el-icon>
          </span>
          <div class="widget-label">{{ widget.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DesignForm } from '@cf/core';
defineProps<{
  form: DesignForm
}>();

const containerWidgets = ref([{ type: 'GridLayout', label: '栅格布局', icon: 'Edit' }]);
const normalWidgetGroups = ref([
  {
    name: '基础控件',
    children: [
      {
        type: 'ReadonlyText',
        label: '只读文本',
        icon: 'Edit'
      },
      { type: 'SingleText', label: '单行文本', icon: 'Edit' },
      { type: 'TextArea', label: '多行文本', icon: 'Edit' },
      { type: 'Number', label: '数字', icon: 'Edit' },
      { type: 'Switch', label: '开关', icon: 'Edit' },
      // { type: 'RadioList', label: '单选列表', icon: 'Edit' },
      // {
      //   type: 'CheckboxList',
      //   label: '多选列表',
      //   icon: 'Edit'
      // },
      // { type: 'DropdownList', label: '下拉列表', icon: 'Edit' },
      // { type: 'DropdownTree', label: '下拉树', icon: 'Edit' },
      { type: 'DatePicker', label: '日期/时间', icon: 'Edit' },
      {
        type: 'DateRangePicker',
        label: '日期/时间范围',
        icon: 'Edit'
      }
      // { type: 'RichText', label: '富文本', icon: 'Edit' }
    ]
  }
]);
</script>

<style lang="less" scoped>
.placeholder {
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
