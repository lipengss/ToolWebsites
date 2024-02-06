<template>
  <el-upload :show-file-list="false" drag :http-request="htttpRequest">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
    拖住到这里 或 <em>点击上传照片</em>
    </div>
  </el-upload>
  <div class="flex-between pt10 pb10">
    <el-space>
      <el-input v-model="state.file.name" readonly placeholder="文件名" />
      <el-tag v-if="state.file.size" type="primary" round>{{fileSize(state.file.size) }}</el-tag>
    </el-space>
    <el-space>
      <el-button v-if="state.file.list.length" :icon="Picture" type="success">图片预览</el-button>
      <el-button :icon="Delete" type="danger" @click="onClearAll">清空所有</el-button>
    </el-space>
  </div>
  <el-input v-model="state.textarea" :rows="10" :autosize="{ minRows: 10, maxRows: 10}" resize="none" placeholder="转换后的base64字符串" type="textarea" />
  <div class="flex-end pt10 pb10">
    <el-radio-group v-model="state.radio" class="mr10">
      <el-radio label="base64">base64</el-radio>
    </el-radio-group>
    <el-button type="primary" :icon="DocumentCopy" @click="onCopy">复制字符串</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { UploadFilled, Delete, Picture, DocumentCopy } from '@element-plus/icons-vue'
import { fileSize } from '~/assets/utils/tools'
import { useCopy } from '~/hooks/useCopy'


const state:PictureState = reactive({
  file: {
    name: '',
    size: 0,
    list: []
  },
  textarea: '',
  radio: 'base64'
})

const { onCopy } = useCopy(toRef(state, 'textarea'))

function htttpRequest(options) {
  const { name, size} = options.file
  state.file.name = name
  state.file.size = size
  const reader = new FileReader();
  reader.readAsDataURL(options.file)
  reader.onload = event => {
    if(event.target === null) return
    state.textarea = event.target.result
    state.file.list = [state.textarea]
  }
  console.log(state.file.list)
}

function onClearAll() {
  state.textarea = ''
  state.file.name = ''
  state.file.size = 0
  state.file.list = []
}

</script>