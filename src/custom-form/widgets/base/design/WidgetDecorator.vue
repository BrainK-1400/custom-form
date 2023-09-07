<template>
  <div class="widget-decorator" :class="[theme + '-theme', isSelected ? 'active' : '']" @click.stop="onSelect">
    <slot></slot>
    <div class="mask-layer" v-if="ifShowMaskLayer"></div>
    <div class="widget-drag" title="调整位置">
      <el-icon>
        <Rank />
      </el-icon>
    </div>
    <div class="widget-actions">
      <slot name="buttons"></slot>

      <el-popconfirm title="确定要删除此控件吗？" width="220" confirm-button-text="确定" cancel-button-text="取消" @confirm="onRemove">
        <template #reference>
          <el-icon title="删除" class="action-icon" style="background-color: red">
            <Delete />
          </el-icon>
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Widget, DesignForm } from '@cf/core';

interface Props {
  widget: Widget,
  theme?: string,
  ifShowMaskLayer?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'blue',
  ifShowMaskLayer: true
});

const isSelected = computed(() => {
  return props.widget == (props.widget.form as DesignForm).selectedWidget;
})

const onRemove = () => {
  (props.widget.form as DesignForm).removeWidget(props.widget);
  (props.widget.form as DesignForm).selectedWidget = null;
}
const onSelect = () => {
  (props.widget.form as DesignForm).selectedWidget = props.widget;
}
</script>

<style lang="less" scoped>
.widget-decorator {
  border: 1px dashed #e8e8e8;
  background-color: #f9f9f9;
  margin: 3px;
  position: relative;

  .mask-layer {
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: block;
      content: '';
    }
  }

  >.widget-drag {
    display: none;
    position: absolute;
    right: 32px;
    top: -12px;
    bottom: -18px;
    height: 26px;
    width: 26px;
    line-height: 26px;
    border-radius: 50%;
    color: #fff;
    cursor: move;
    text-align: center;
  }

  >.widget-actions {
    display: none;
    position: absolute;
    right: 0;
    top: -12px;
    height: 26px;
    line-height: 29px;
    z-index: 2;
    border-radius: 50%;
    color: #fff;
  }

  .action-icon {
    width: 26px;
    height: 26px;
    line-height: 29px;
    cursor: pointer;
    vertical-align: 0px;
    border-radius: 50%;
  }

  &.active {
    >.widget-drag {
      display: block;
    }

    >.widget-actions {
      display: block;
    }

    &.placeholder {
      height: 0px;
      overflow: hidden;
      outline: 1px solid red !important;
      border: 1px solid red !important;
      background: red !important;
    }
  }

  @blue: #409eff;

  &.blue-theme {
    >.widget-drag {
      background: @blue;
    }

    >.widget-actions {
      background: @blue;
    }

    &:hover {
      background: #ecf5ff;
      outline: 1px solid @blue;
      outline-offset: 0;
    }

    &.active {
      outline: 2px solid @blue;
      border: 1px solid @blue;
    }
  }

  @red: #e6a23c;

  &.red-theme {
    >.widget-drag {
      background: @red;
    }

    >.widget-actions {
      background: @red;
    }

    &:hover {
      background: #fdf6ec;
      outline: 1px solid @red;
      outline-offset: 0;
    }

    &.active {
      outline: 2px solid @red;
      border: 1px solid @red;
    }
  }
}
</style>
