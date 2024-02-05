<template>
  <div>
    <el-menu
      :default-active="state.activeIndex"
      mode="horizontal"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="/picture">
        <template #title>图片处理</template>
        <el-menu-item index="/picture/crop">图片裁切</el-menu-item>
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

const state = reactive({
  activeIndex: '/'
})

useHead({
  title: '工具网站',
  meta: [
    { name: 'description', content: '图片转base64、图片压缩' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})


</script>
