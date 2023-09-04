
<template>
  <div class="design-form">
    <div class="top">
      <Header></Header>
    </div>
    <div class="bottom">
      <div class="left">
        <WidgetTempalteList :form="form"></WidgetTempalteList>
      </div>
      <div class="center">
        <div class="form-view-area">
        </div>
      </div>
      <div class="right">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import WidgetTempalteList from './WidgetTempalteList.vue'

import { DesignForm } from '@cf/core';

const form = new DesignForm();
</script>

<style lang="less" scoped>
.design-form {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  display: flex;
  flex-direction: column;

  .top {
    flex: 0 0 40px;
    padding: 10px;
  }

  .bottom {
    flex: auto;
    min-height: 450px;
    border: 1px solid #e0e0e0;
    display: flex;

    .left {
      flex: 0 0 150px;
      overflow: auto;
    }

    .center {
      flex: auto;
      display: flex;
      flex-direction: column;

      .form-view-area {
        flex: auto;
        overflow-y: scroll;
        background: #fafafa;
        padding: 10px;
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;

        .form-widget-container {
          min-height: 600px;
          // border: 1px dashed #999;
          background: #fff;
          margin-bottom: 16px;
        }
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
  }
}
</style>
