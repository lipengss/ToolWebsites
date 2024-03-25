<template>
	<el-config-provider :locale="locale">
		<NuxtLayout> <NuxtPage /></NuxtLayout>
	</el-config-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});
const locale = ref(zhCn);
</script>
