<template>
    <div class="custom-form-display">
        <Header :form="form" class="top"></Header>
        <DisplayFormView :form="form" />
    </div>
</template>
  
<script setup lang='ts'>
import Header from './Header.vue'
import DisplayFormView from '@cf/DisplayView/index.vue'
import { DisplayForm } from '@cf/core'
import { useStore } from '@/store'

const form = ref(new DisplayForm());
const store = useStore();
if (store.state.form) {
    form.value.init(JSON.parse(store.state.form));
}

</script>
  
<style lang="less">
.custom-form-display {
    .top {
        padding: 5px;
    }
}
</style>