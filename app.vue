<template>
  <div>
    <el-menu
      :default-active="state.activeIndex"
      mode="horizontal"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="/picture">
        <template #title>
          <el-icon><Picture /></el-icon>
          图片处理
        </template>
        <el-menu-item index="/picture/crop">
          <template #title>
            <el-icon><Crop /></el-icon>
            图片裁切
          </template>
        </el-menu-item>
        <el-menu-item index="/picture/base64">图片压缩</el-menu-item>
        <el-menu-item index="/picture/base64">图片转base64</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="container">
      <el-row justify="center">
        <el-col :xs="24" :lg="20">
          <NuxtPage />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { Picture, Crop } from '@element-plus/icons-vue'
const state = reactive({
  activeIndex: '/'
})



useSeoMeta({
  title: '前端工具网站',
  description: '图片转base64、图片压缩',
  keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合'
})


</script>
