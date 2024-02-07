<template>
  <TwoColumnLayout :anchor-points="anchorPoints">
    <el-alert type="warning" :title="notions" :closable="false" class="mb10" />
    <template v-for="item in anchorPoints" :key="item.id">
      <el-card :header="`# ${item.name}`" :id="item.id">
        <component :is="item.component" />
      </el-card>
      <el-divider>分割线</el-divider>
    </template>
  </TwoColumnLayout>
</template>
<script setup lang="ts">
import base64 from './components/base64.vue'
import pictures from './components/picture.vue'


const anchorPoints = [
  {
    name: '图片转base64',
    id: 'imageToBase64',
    component: base64
  },
  {
    name: 'base64转图片',
    id: 'base64ToImage',
    component: pictures
  }
]


const notions = '本工具不会把图片上传到服务器转换，而是在浏览器中执行。'




</script>