<template>
  <el-row type="flex" justify="space-around" align="middle">
    <el-col :span="18"></el-col>
    <el-col :span="6">
      <span style="float: right">
        <el-button type="primary" @click="onShowFormData">获取表单的数据</el-button>
      </span>
      <el-dialog v-model="dialogVisible" title="表单数据" width="80%">
        <el-input type="textarea" v-model="dialogContent" :rows="25"></el-input>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { DisplayForm } from '@cf/core';

const props = defineProps<{ form: DisplayForm }>();

const dialogVisible = ref(false);
const dialogContent = ref('');

const onShowFormData = () => {
  dialogVisible.value = true;
  dialogContent.value = JSON.stringify(props.form.getWidgetModelInfos(), null, "\t");
}

</script>