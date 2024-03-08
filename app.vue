<template>
	<el-config-provider :locale="locale">
		<Banner />
		<header-top />
		<div class="main">
			<NuxtPage />
		</div>
		<el-backtop :right="50" :bottom="50" />
		<el-footer>
			<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
		</el-footer>
	</el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});

const locale = ref(zhCn);

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
