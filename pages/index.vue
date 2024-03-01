<template>
	<div class="header">
		<grid-layout
			:layout.sync="layout"
			:col-num="24"
			:row-height="80"
			:is-draggable="true"
			:is-resizable="true"
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
				<el-icon color="#fff" class="drag vue-draggable-handle" title="移动"><svg-icon name="drag" /></el-icon>
				<component v-if="item.component" :is="item.component" />
			</grid-item>
		</grid-layout>
	</div>
	<div class="blok">
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
	</div>
</template>
<script setup lang="ts">
import { computed, ref, defineAsyncComponent } from 'vue';
import { hotWebsiteList, hotTypeList } from '~/assets/utils/hotWebsite';
import { useAnimate } from '~/hooks/useAnimate';
const { hoverAnimate } = useAnimate('.link', 'animate__bounceIn');

const layout = [
	{ x: 0, y: 0, w: 8, h: 2, i: '1', component: resolveComponent('Weather') },
	{ x: 2, y: 0, w: 2, h: 4, i: '2' },
	{ x: 4, y: 0, w: 2, h: 5, i: '3' },
	{ x: 6, y: 0, w: 2, h: 3, i: '4' },
	{ x: 8, y: 0, w: 2, h: 3, i: '5' },
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
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid var(--el-color-primary-light-8);
		.drag {
			padding: 4px;
			position: absolute;
			left: -2px;
			bottom: 0;
			z-index: 100;
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
