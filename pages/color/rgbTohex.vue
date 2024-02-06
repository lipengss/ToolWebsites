<template>
  <el-space>
    <el-color-picker :model-value="state.colorPickerValue" color-format="rgb" @change="onColorPickerChange" />
    <el-input  v-model="state.rgbValue" placeholder="请输入RGB值 如: 255,182,193" style="min-width: 300px;" @change="onRgbaToHex">
      <template #prepend>RGB</template>
    </el-input>
    <el-button type="primary" @click="onRgbaToHex(state.rgbValue)">
      转<el-icon class="el-icon--right"><Right /></el-icon>
    </el-button>
    <el-input v-model="state.hexValue" maxlength="7" readonly clearable>
      <template #prepend>HEX</template>
      <template #append>
        <el-button @click="onCopy">复制</el-button>
      </template>
      <template #suffix>
        <div class="color-pane" :style="`background-color:${state.hexValue}`"></div>
      </template>
    </el-input>
  </el-space>
</template>
<script setup lang="ts">
import { reactive, toRef } from 'vue';
import { Right } from '@element-plus/icons-vue'
import { useColorFormat } from '~/assets/utils/colorFormat'
import { useCopy } from '~/hooks/useCopy'
const { rgbToHex } = useColorFormat()

const state = reactive({
  hexValue: '',
  rgbValue: '',
  colorPickerValue: ''
})

const { onCopy } = useCopy(toRef(state, 'rgbValue'))

function onRgbaToHex(val: string) {
  let strArr = val.split(',');
  const color1 = parseInt(strArr[0]);
  const color2 = parseInt(strArr[1]);
  const color3 = parseInt(strArr[2]);
  state.rgbValue = `${color1},${color2},${color3}`
  state.colorPickerValue = `rgb(${state.rgbValue})`
  const hexColor = rgbToHex(color1, color2, color3)
  state.hexValue = hexColor
}

let regex = /\((.+?)\)/g;

function onColorPickerChange(color: string) {
  let colorstr = color.match(regex);
  if (colorstr && colorstr.length) {
    let str = colorstr[0]
    str =  str.substring(1, str.length -1)
    onRgbaToHex(str)
  }
 
}


</script>