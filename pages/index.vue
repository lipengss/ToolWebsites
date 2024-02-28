<template>
	<div class="blok">
		<el-card v-for="row in formatTypeList" :key="row.type" :header="row.name" class="blok-card">
			<el-row :gutter="20">
				<el-col v-for="hot in row.children" :lg="3" :xl="24">
					<div class="hot-item">
						<img :src="hot.icon" width="20" height="20" :alt="hot.name" />
						{{ hot.name }}
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { hotWebsiteList } from '~/assets/utils/hotWebsite';
definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

const typeList: Array<WebTypeItem> = [
	{
		name: '搜索引擎',
		url: '/serch',
		icon: '/search.svg',
		type: 'search',
		children: [],
	},
];

const formatTypeList = computed(() => {
	const list = typeList.map((type) => {
		type.children = hotWebsiteList.filter((hot) => hot.type === type.type);
		return type;
	});
	return list;
});
</script>
<style lang="scss" scoped>
.hot-item {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 6px 10px;
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid var(--el-color-primary-light-8);
	img {
		border: 1px solid var(--el-color-primary-light-8);
		padding: 4px;
		border-radius: 4px;
		margin-right: 8px;
	}
	&:hover {
		background-color: var(--el-color-primary-light-3);
	}
}
</style>
