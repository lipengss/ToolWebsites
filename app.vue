<template>
	<el-container>
		<header-top />
		<el-main id="el-main-scroll-box">
			<div class="container">
				<NuxtPage />
			</div>
		</el-main>
		<el-footer>Footer</el-footer>
	</el-container>
</template>
<script setup lang="ts">
useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});
</script>
<style lang="scss" scoped>
.container {
	max-width: 1100px;
	margin: 0 auto;
}
</style>
