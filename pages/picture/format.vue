<template>
<el-tabs type="card">
  <el-tab-pane label="图片转base64">
    <base64 />
  </el-tab-pane>
  <el-tab-pane type="card" label="base64转图片">
    <picture />
  </el-tab-pane>
</el-tabs>
<el-alert type="warning" :title="notions" :closable="false" />
</template>
<script setup lang="ts">
import base64 from './components/base64.vue'
import picture from './components/picture.vue'

const notions = '提供图片转 Base64 的功能，可以把指定图片转换成 Base64 编码的形式; 支持本地图片以及网络图片（指定图片URL）两种形式。本工具不会把图片上传到服务器转换，而是在浏览器中执行，图片转换为 Base64 的速度非常快。'


</script>