<template>
  <el-dialog :modelValue="modelValue" title="配置选项" draggable :close-on-click-modal="false" @close="onClose">
    <VueDraggableNext class="option-list" :list="newOptions" handle=".move">
      <div class="option" v-for="(option, index) in newOptions">
        <div class="label">
          <el-input v-model="option.label" placeholder="选项文字"><template #prepend>文本：</template></el-input>
        </div>
        <div class="value">
          <el-input v-model="option.value" placeholder="选项值"><template #prepend>值：</template></el-input>
        </div>
        <div class="operation">
          <el-button class="move" type="primary" size="small" circle>
            <template #icon><el-icon>
                <Rank />
              </el-icon>
            </template>
          </el-button>
          <el-button type="primary" size="small" circle @click="onRemove(index)">
            <template #icon>
              <el-icon>
                <Delete />
              </el-icon>
            </template>
          </el-button>
        </div>
      </div>
    </VueDraggableNext>
    <template #footer>
      <div class="button-container">
        <span class="left-align">
          <el-button type="primary" @click="onAdd">
            添加选项
          </el-button>
        </span>
        <span class="right-align">
          <el-button @click="onClose">取消</el-button>
          <el-button type="primary" @click="onSave">
            保存
          </el-button>
        </span>
      </div>
    </template>
  </el-dialog>
</template>
  
<script setup lang='ts'>
import { cloneDeep } from 'lodash-es'
import { VueDraggableNext } from 'vue-draggable-next'
import type { Option } from '@cf/core';

const props = defineProps<{ modelValue: boolean, options: Array<Option> }>();

const newOptions = ref([] as Array<Option>);
onMounted(() => {
  newOptions.value = cloneDeep(props.options);
})

const onAdd = () => {
  newOptions.value.push({ label: '', value: '' });
}

const onRemove = (index: number) => {
  newOptions.value.splice(index, 1);
}


const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'ok', options: Array<Option>): void;
}>();
const onClose = () => {
  emit('update:modelValue', false);
}

const onSave = () => {
  emit('ok', newOptions.value);
  onClose();
}

</script>
  
<style lang="less" scoped>
.move {
  cursor: move;
}

.option-list {
  min-height: 400px;

  .option {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0px;

    .label {
      flex: 1 1 100px;
    }

    .value {
      flex: 1 1 100px;
    }

    .operation {
      flex: 1 1 100px;
    }
  }
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.left-align {
  align-self: flex-start;
}

.right-align {
  display: flex;
  align-items: flex-end;
}
</style>