<template>
  <el-card header="图片转base64">
    <el-upload :show-file-list="false" drag :http-request="htttpRequest">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
     拖住到这里 或 <em>点击上传照片</em>
    </div>
  </el-upload>
  <div class="flex-between pt10 pb10">
    <div class="flex-start">
      <el-input v-model="state.file.name" style="min-width: 280px" placeholder="文件名" />
      <!-- <span>{{_.fileSize(state.file.size) }}</span> -->
    </div>
    <el-button :icon="Delete" type="danger" @click="onClearAll">清空所有</el-button>
  </div>
  <el-input v-model="state.textarea" :rows="10" :autosize="{ minRows: 10, maxRows: 10}" resize="none" placeholder="转换后的base64字符串" type="textarea" />
  <div class="flex-end pt10 pb10">
    <el-radio-group v-model="state.radio" class="mr10">
      <el-radio label="base64">base64</el-radio>
    </el-radio-group>
    <el-button type="primary">复制字符串</el-button>
  </div>
</el-card>
  
</template>
<script setup lang="ts">
import { UploadFilled, Delete } from '@element-plus/icons-vue'  
import { reactive } from 'vue';
import _ from 'nuxt-lodash'

const state:PictureState = reactive({
  file: {
    name: '',
    size: ''
  },
  textarea: '',
  radio: 'base64'
})

console.log(_)


function htttpRequest(options) {
  const { name, size} = options.file
  state.file.name = name
  state.file.size = size
  const reader = new FileReader();
  reader.readAsDataURL(options.file)
  reader.onload = event => {
    if(event.target === null) return
    state.textarea = event.target.result
  }
}

function onClearAll() {
  state.textarea = ''
}


</script>