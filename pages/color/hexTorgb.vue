<template>
  <el-space>
    <el-color-picker :model-value="state.toRGB.hexValue" @change="onColorPickerChange" />
    <el-input v-model="state.toRGB.hexValue" maxlength="7" clearable placeholder="请输入HEX值 如: # FFB6C1" style="min-width: 300px;" @input="onHexInput">
      <template #prepend>HEX</template>
    </el-input>
    <el-button type="primary" @click="onHexToRgb(state.toRGB.hexValue)">
      转<el-icon class="el-icon--right"><Right /></el-icon>
    </el-button>
    <el-input  :model-value="state.toRGB.rgbValue" readonly >
      <template #prepend>RGB</template>
      <template #append>
        <el-button @click="onCopy">复制</el-button>
      </template>
      <template #suffix>
        <div class="color-pane" :style="`background-color:${state.toRGB.rgbValue}`"></div>
      </template>
    </el-input>
    <el-checkbox v-model="state.toRGB.isRgbPrefix" @change="onHexToRgb(state.toRGB.hexValue)">添加rgb前缀</el-checkbox>
  </el-space>
</template>
<script setup lang="ts">
import { reactive, toRef } from 'vue';
import { Right } from '@element-plus/icons-vue'
import { useColorFormat } from '~/assets/utils/colorFormat'
import { useCopy } from '~/hooks/useCopy'
const { hexToRgb } = useColorFormat()

const state = reactive({
 toRGB: {
    hexValue: '',
    rgbValue: '',
    isRgbPrefix: true
  }
})

const { onCopy } = useCopy(toRef(state.toRGB, 'rgbValue'))

function onHexToRgb(val: string) {
  if (val.length === 7) {
    const rgbArr = hexToRgb(val)
    if (rgbArr) {
      const rgbStr =  rgbArr.join(',')
      state.toRGB.rgbValue = state.toRGB.isRgbPrefix ? `rgba(${rgbStr})` : rgbStr
    }
  } else {
    state.toRGB.rgbValue = ''
  }
}

function onColorPickerChange(color: string) {
  state.toRGB.hexValue = color
  onHexToRgb(color)
}


function onHexInput(val:string) {
  onHexToRgb(val)
}



</script>
