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
		<div class="blok">
			<el-card v-for="(row, rowIndex) in formatHotTypeList(hotTypeList)" :key="row.type" :header="row.name" class="blok-card mb20">
				<template #header>
					<el-space v-if="row.children && row.children.length">
						<span>{{ row.name }}</span>
						<el-radio-group v-model="row.redirect" size="small">
							<el-radio-button v-for="child in row.children" :label="child.name" :value="child.type" />
						</el-radio-group>
					</el-space>
				</template>
				<el-row :gutter="20">
					<el-col v-for="(hot, index) in row.routes" :lg="4" :xl="4">
						<el-tooltip :content="hot.description" placement="top" effect="light">
							<el-link
								class="hot-item"
								@mouseenter="hoverAnimate('in', rowIndex + '-' + index)"
								@mouseleave="hoverAnimate('out', rowIndex + '-' + index)"
								:href="hot.path"
								:underline="false"
								target="_blank"
								type="primary"
							>
								<img class="icon" :src="hot.meta.icon" width="20" height="20" :alt="hot.name" />
								<span :class="`link-${rowIndex}-${index}`">{{ hot.name }}</span>
							</el-link>
						</el-tooltip>
					</el-col>
				</el-row>
			</el-card>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { hotTypeList, formatHotTypeList } from '~/assets/utils/hotWebsite';
import { useAnimate } from '~/hooks/useAnimate';
const { hoverAnimate } = useAnimate('.link', 'animate__bounceIn');

const component = resolveComponent('Site');

const layout = shallowRef([{ x: 0, y: 2, w: 4, h: 2, i: '1', component: resolveComponent('Weather') }]);

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
