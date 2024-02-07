<template>
  <el-space alignment="stretch" wrap>
    <el-color-picker :model-value="state.hexValue" @change="onColorPickerChange" />
    <el-input v-model="state.hexValue" maxlength="7" clearable placeholder="请输入HEX值 如: # FFB6C1" style="min-width: 300px;" @input="onHexInput">
      <template #prepend>HEX</template>
    </el-input>
    <el-button type="primary" @click="onHexToRgb(state.hexValue)">
      转<el-icon class="el-icon--right"><Right /></el-icon>
    </el-button>
    
    <el-space direction="vertical"  alignment="stretch">
      <el-input  :model-value="state.rgbValue" readonly >
        <template #prepend>RGB</template>
        <template #append>
          <el-button @click="onCopy(`${state.hexValue} 复制成功!`)">复制</el-button>
        </template>
        <template #suffix>
          <div class="color-pane" />
        </template>
      </el-input>
      <el-checkbox v-model="state.isRgbPrefix" @change="onHexToRgb(state.hexValue)">添加rgb前缀</el-checkbox>
    </el-space>
    <el-button type="danger" :icon="Delete" plain @click="onClear">清空</el-button>
  </el-space>
</template>
<script setup lang="ts">
import { reactive, toRef } from 'vue';
import { Right, Delete } from '@element-plus/icons-vue'
import { useColorFormat } from '~/assets/utils/colorFormat'
import { useCopy } from '~/hooks/useCopy'
const { hexToRgb } = useColorFormat()

const state = reactive({
    hexValue: '',
    rgbValue: '',
    isRgbPrefix: true
})

const { onCopy } = useCopy(toRef(state, 'rgbValue'))

function onHexToRgb(val: string) {
  if (val.length === 7) {
    const rgbArr = hexToRgb(val)
    if (rgbArr) {
      const rgbStr =  rgbArr.join(',')
      state.rgbValue = state.isRgbPrefix ? `rgba(${rgbStr})` : rgbStr
    }
  } else {
    state.rgbValue = ''
  }
}

const showInputBgColor = computed(() => {
  return state.isRgbPrefix ? state.rgbValue : `rgb(${state.rgbValue})`
})

function onClear() {
  state.hexValue = ''
  state.rgbValue = ''
}

function onColorPickerChange(color: string) {
  state.hexValue = color
  onHexToRgb(color)
}


function onHexInput(val:string) {
  onHexToRgb(val)
}

</script>
<style lang="scss" scoped>
.el-input-group{
  max-height: 32px;
}
.color-pane{
  background-color: v-bind(showInputBgColor);
}
</style>
