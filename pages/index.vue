<template>
	<div class="blok">
		<el-card v-for="row in typeList" :key="row.type" :header="row.name" class="blok-card">
			<el-row :gutter="20">
				<el-col :span="24"> </el-col>
			</el-row>
		</el-card>
	</div>
</template>
<script setup lang="ts">
definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

const typeList = [
	{
		name: '搜索引擎',
		url: '/serch',
		icon: '/search.svg',
		type: 'search',
	},
];
</script>
