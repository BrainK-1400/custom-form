<template>
  <el-row type="flex" justify="space-around" align="middle">
    <el-col :span="18"></el-col>
    <el-col :span="6">
      <span style="float: right">
        <el-button type="primary" @click="onShowDesignData">显示设计数据</el-button>
        <el-button type="primary" @click="onPreview">预览</el-button>
      </span>
      <el-dialog v-model="dialogVisible" title="设计数据" width="80%">
        <el-input type="textarea" v-model="dialogContent" :rows="30"></el-input>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { DesignForm } from '@cf/core';
import { useRouter } from 'vue-router'

const props = defineProps<{ form: DesignForm }>();

const dialogVisible = ref(false);
const dialogContent = ref('');

const store = useStore();
const router = useRouter()

const onShowDesignData = () => {
  dialogVisible.value = true;
  dialogContent.value = JSON.stringify(props.form.getPlainData(), null, "\t");
}

const onPreview = () => {
  store.commit('setForm', JSON.stringify(props.form.getPlainData()));
  router.push({
    path: '/display',
  });
}
</script>