<template>
	<div class="container" style="background-color: transparent">
		<grid-layout
			:col-num="12"
			:layout.sync="layout"
			:row-height="77"
			:is-draggable="true"
			:is-resizable="false"
			:is-mirrored="false"
			:vertical-compact="true"
			:responsive="true"
			:preventCollision="true"
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
			>
				<el-icon class="drag vue-draggable-handle" title="移动"><svg-icon name="drag" /></el-icon>
				<component v-if="item.component" :is="item.component" class="component-item" />
			</grid-item>
		</grid-layout>
	</div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useAnimate } from '~/hooks/useAnimate';
const { hoverAnimate } = useAnimate('.link', 'animate__bounceIn');

const layout = shallowRef([
	{ x: 0, y: 0, w: 3, h: 2, i: '1', component: resolveComponent('Weather') },
	{ x: 3, y: 0, w: 3, h: 2, i: '2', component: resolveComponent('Calendar') },
	{ x: 6, y: 0, w: 3, h: 2, i: '3', component: resolveComponent('OffWork') },
]);

const reader = ref(false);

definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

onMounted(() => {
	reader.value = true;
});
</script>
<style lang="scss" scoped>
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
		overflow: hidden;
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
