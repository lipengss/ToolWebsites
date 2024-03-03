<template>
	<div class="header">
		<grid-layout
			:layout.sync="layout"
			:col-num="24"
			:row-height="77"
			:is-draggable="true"
			:is-resizable="false"
			:is-mirrored="false"
			:vertical-compact="true"
			:margin="[20, 20]"
			:use-css-transforms="true"
		>
			<grid-item
				class="grid-item"
				v-for="item in layout"
				:x="item.x"
				:y="item.y"
				:w="item.w"
				:h="item.h"
				:i="item.i"
				drag-allow-from=".vue-draggable-handle"
				drag-ignore-from=".no-drag"
			>
				<el-icon class="drag vue-draggable-handle" title="移动"><svg-icon name="drag" /></el-icon>
				<component v-if="item.component" :is="item.component" v-bind="item.parame" class="component-item" />
			</grid-item>
		</grid-layout>
	</div>
	<!-- <div class="blok">
		<el-card v-for="row in formatTypeList" :key="row.type" :header="row.name" class="blok-card">
			<el-row :gutter="20">
				<el-col v-for="(hot, index) in row.children" :lg="3" :xl="3">
					<div class="hot-item" @mouseenter="hoverAnimate('in', index)" @mouseleave="hoverAnimate('out', index)">
						<img class="icon" :src="hot.icon" width="20" height="20" :alt="hot.name" />
						<el-link class="link" :href="hot.url" :underline="false" target="_blank" type="primary">{{ hot.name }}</el-link>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div> -->
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { hotWebsiteList, hotTypeList } from '~/assets/utils/hotWebsite';
import { useAnimate } from '~/hooks/useAnimate';
const { hoverAnimate } = useAnimate('.link', 'animate__bounceIn');

const component = resolveComponent('Site');

const layout = [
	{ x: 0, y: 0, w: 8, h: 2, i: '1', component: resolveComponent('Weather') },
	{ x: 8, y: 0, w: 2, h: 1, i: '2', component, parame: { url: 'https://www.baidu.com', title: '百度' } },
	{ x: 10, y: 0, w: 2, h: 1, i: '3', component, parame: { url: 'https://www.google.com', title: '谷歌' } },
	{ x: 12, y: 0, w: 2, h: 1, i: '4', component, parame: { url: 'https://www.bing.com', title: '必应' } },
	{ x: 14, y: 0, w: 2, h: 1, i: '5', component, parame: { url: 'https://www.sogou.com', title: '搜狗' } },
];

const reader = ref(false);

definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

const formatTypeList = computed(() => {
	const list = hotTypeList.map((type) => {
		type.children = hotWebsiteList.filter((hot) => hot.type === type.type);
		return type;
	});
	return list;
});

onMounted(() => {
	setTimeout(() => {
		reader.value = true;
	}, 1000);
});
</script>
<style lang="scss" scoped>
.header {
	min-height: 400px;
	.grid-item {
		position: relative;
		.drag {
			padding: 4px;
			position: absolute;
			left: -1px;
			bottom: 0;
			z-index: 100;
			color: var(--el-fill-color-darker);
		}
		.component-item {
			border-radius: 10px;
			box-shadow: 1px 1px 5px var(--el-bg-color-page);
		}
	}
}

.hot-item {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 6px 10px;
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid var(--el-color-primary-light-8);
	.icon {
		border: 1px solid var(--el-color-primary-light-8);
		padding: 4px;
		border-radius: 4px;
		margin-right: 8px;
	}
	.link {
		flex: 1;
	}
}
</style>
