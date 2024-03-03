<template>
	<Banner />
	<!-- <header-top /> -->
	<div class="main">
		<div class="container">
			<NuxtPage />
		</div>
	</div>
	<el-backtop :right="50" :bottom="50" />
	<el-footer>Footer</el-footer>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});

const state = reactive({
	lastScrollTop: 0,
	scrollDirection: '',
});

function handleScroll() {
	const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
	if (currentScrollTop > state.lastScrollTop) {
		state.scrollDirection = 'down';
	} else {
		state.scrollDirection = 'up';
	}
	state.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="scss" scoped>
.main {
	min-height: calc(100vh - 30px);
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
