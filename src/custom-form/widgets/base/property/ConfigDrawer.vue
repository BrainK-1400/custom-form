<template>
  <a-drawer :width="944" @close="$emit('close')" :maskClosable="false" :visible="visible">
    <div class="ant-drawer-header">
      <a-icon type="profile" theme="twoTone" :style="{ fontSize: '18px' }" class="margin-right-mini" />
      {{ title }}
      <slot name="buttons"></slot>
    </div>
    <slot></slot>
  </a-drawer>
</template>

<script>
export default {
  name: 'ConfigDrawer',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 944
    }
  }
};
</script>

<style lang="less" scoped></style>
