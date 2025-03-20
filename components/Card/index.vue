<template>
	<div class="card">
		<div class="top">
			<div class="logo">
				<img v-if="app.meta.type === 'img'" :src="app.meta.value" :width="app.meta.size" :height="app.meta.size" />
				<el-icon v-else-if="app.meta.type === 'icon' && app.meta.value" :size="app.meta.size" color="red">
					<svg-icon :name="app.meta.value" :color="app.meta.color"></svg-icon>
				</el-icon>
				<div v-else class="icon-text" :style="{ width: app.meta.size + 'px', height: app.meta.size + 'px' }">{{ app.meta.value }}</div>
			</div>
			<div class="right">
				<div class="title">{{ app.name }}</div>
				<div class="company">{{ app.companyName }}</div>
				<el-space class="tags">
					<el-tag v-for="tag in tags" :key="tag.value" type="primary" effect="dark" round size="small">{{ tag.label }}</el-tag>
				</el-space>
			</div>
		</div>
		<div class="bottom">
			<div class="desc">
				{{ app.meta.description }}
				<el-text class="mx-1" type="primary">详情</el-text>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { tagList } from '~/assets/website/websiteList';

interface Props {
	app: RouteItem;
}

const props = withDefaults(defineProps<Props>(), {});

const bgColor = computed(() => props.app.meta.bgColor);

const tags = tagList.filter((item) => props.app.meta.tag.includes(item.value));
</script>

<style lang="scss" scoped>
.card {
	padding: 12px;
	border-radius: 10px;
	background-color: #fff;
	.top {
		display: flex;
		margin-bottom: 8px;
		.logo {
			width: 60px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10px;
			border-radius: 6px;
			background-color: v-bind(bgColor);
			box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
			flex-shrink: 0;
		}
		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			overflow: hidden;
			.title {
				font-size: 14px;
				font-weight: bold;
			}
			.company {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 12px;
				color: #999;
			}
		}
	}
	.bottom {
		.desc {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-size: 12px;
			color: #666;
		}
	}
}
</style>
