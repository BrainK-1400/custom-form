<template>
  <div class="custom-form-design">
    <div class="top">
      <Header :form="form"></Header>
    </div>
    <DesignFormView class="bottom" :form="form"></DesignFormView>
  </div>
</template>
  
<script setup lang='ts'>
import Header from './Header.vue'
import DesignFormView from '@cf/DesignView/index.vue'
import { DesignForm } from '@cf/core'

const form = ref(new DesignForm());

</script>
  
<style lang="less">
.custom-form-design {
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
  }
}
</style>