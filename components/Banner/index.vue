<template>
	<el-row class="banner">
		<el-col :xl="7" class="content">
			<div class="flex-around serach-engines">
				<el-link v-for="item in filterHotWebsiteList" :key="item.key" :href="item.url" target="_blank">{{ item.name }}</el-link>
			</div>
			<el-input size="large" placeholder="请输入搜索内容">
				<template #append>
					<el-button type="primary">搜索</el-button>
				</template>
				<template #prefix>
					<img width="20" height="20" :src="currentIcon" id="serach-icon" class="animate__animated animate__rotateInDownLeft" />
				</template>
			</el-input>
		</el-col>
	</el-row>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { hotWebsiteList } from '~/assets/utils/hotWebsite';
import { Search } from '@element-plus/icons-vue';
import { useParallax } from '@vueuse/core';

const HOTS = ['baidu', 'bing', 'google', 'github', 'sougou'];

const state = reactive({
	current: 'baidu',
});

const currentIcon = computed(() => {
	const item = hotWebsiteList.find((item) => item.key === state.current);
	return item?.icon || '';
});

const filterHotWebsiteList = hotWebsiteList.filter((item) => HOTS.includes(item.key));

function onSearchChange() {
	const searchIconDom = document.getElementById('serach-icon');
	if (searchIconDom) {
		searchIconDom.classList.add('animate__animated', 'animate__rotateInDownLeft');
		setTimeout(() => {
			searchIconDom.classList.remove('animate__animated', 'animate__rotateInDownLeft');
		}, 1000);
	}
}
</script>
<style lang="scss" scoped>
.banner {
	height: 200px;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	background-size: cover;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		.serach-engines {
			width: 100%;
			margin-bottom: 10px;
		}
	}
}
</style>
