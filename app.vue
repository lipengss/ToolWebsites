<template>
	<header-top />
	<div class="main">
		<div class="container">
			<NuxtPage />
		</div>
	</div>
	<el-backtop :right="100" :bottom="100" />
	<el-footer>Footer</el-footer>
</template>
<script setup lang="ts">
useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});
</script>
<style lang="scss" scoped>
.main {
	min-height: calc(100vh - 30px);
	padding-top: 60px;
	box-sizing: border-box;
}
.container {
	max-width: 1200px;
	margin: 10px auto;
	padding: 10px;
	box-sizing: border-box;
	background-color: var(--el-bg-color);
}
.el-footer {
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	color: var(--el-text-color-regular);
	background-color: var(--el-bg-color);
}
</style>
