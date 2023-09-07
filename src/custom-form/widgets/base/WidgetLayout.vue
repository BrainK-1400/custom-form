<template>
  <div class="widget" :class="{
    'flex-layout': isFlex,
    'flex-column': layout === 'Vertial',
    'widget-design': isDesign,
    'widget-display': !isDesign
  }" v-if="!isHidden">
    <template v-if="layout === 'Horizontal'">
      <div class="widget-left" :style="{ flexBasis: '180px' }">
        {{ widget.label }}
        <span class="widget-required" v-if="isRequired">
          *
        </span>
        <el-tooltip v-if="widget.description && widget.isEditable" :content="widget.description">
          <el-icon>
            <QuestionFilled />
          </el-icon>
        </el-tooltip>
      </div>
      <div class="widget-right">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="layout === 'Vertial'">
      <div class="widget-top" v-if="widget.label">
        <el-tooltip v-if="widget.description && widget.isEditable" :content="widget.description">
          <el-icon>
            <QuestionFilled />
          </el-icon>
        </el-tooltip>
        {{ widget.label }}
        <span class="widget-required" v-if="isRequired">*</span>
      </div>
      <div class="widget-bottom">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Widget } from '@cf/core';

interface Props {
  widget: Widget,
  layout?: 'Horizontal' | 'Vertial' | 'None',
  isDesign?: boolean,
  disableRequired?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'Horizontal',
  isDesign: false,
  disableRequired: false
});
const isFlex = computed(() => {
  switch (props.layout) {
    case 'Horizontal':
    case 'Vertial':
      return true;
  }
});
const isRequired = computed(() => {
  return (
    !props.isDesign &&
    !props.disableRequired &&
    props.widget.isRequired
  );
});
const isHidden = computed(() => {
  return !props.isDesign && props.widget.isHidden;
});
</script>

<style lang="less" scoped>
.widget {
  border: 1px solid #eee;
  background: #fff;

  &.flex-column {
    flex-direction: column;
  }

  &.flex-layout {
    display: flex;

    .widget-left {
      padding: 8px;
      flex-grow: 0;
      flex-shrink: 0;
      text-align: left;
      background: #f9f9f9;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;

      .widget-required {
        color: red !important;
        margin-left: 5px;
      }
    }

    .widget-left-c {
      padding: 8px;
      flex-grow: 0;
      flex-shrink: 0;
      text-align: left;
      background: #f9f9f9;
      border-right: 1px solid rgba(0, 0, 0, 0.1);

      .widget-required {
        color: red !important;
      }
    }

    .widget-right {
      flex: auto;
      align-self: center;
      padding: 8px;
      line-height: 33px;
      // border-right: 1px solid #e8e8e8;
    }

    .widget-top {
      flex: 0 0 30px;
      line-height: 33px;
      text-align: left;
      padding: 8px;

      .widget-required {
        color: red !important;
      }
    }

    .widget-bottom {
      flex: auto;
      padding: 8px;
    }
  }

  &.widget-design {
    >.widget-left {
      line-height: 33px;
    }

    >.widget-left-c {
      line-height: 16px;
    }
  }

  &.widget-display {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0;
    border-right: 0;
    border-left: 0;
    background: #fff;

    >.widget-left {
      line-height: 33px;
      word-break: break-word;
    }

    >.widget-left-c {
      line-height: 16px;
      word-break: break-word;
    }
  }
}

.widget {
  .grid-row:nth-of-type(1) {
    border-top: 1px solid #e8e8e8;
  }
}

.display-form .flex-layout {
  border-right: 1px solid #e8e8e8 !important;
  border-left: 1px solid #e8e8e8 !important;
}
</style>
