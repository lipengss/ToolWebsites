<template>
	<el-tooltip effect="light" :content="app.meta.description" placement="top">
		<div class="appliaction">
			<nuxt-link :to="app.path" target="_blank" class="icon-wrap" :style="{ backgroundColor: app.meta.bgColor }">
				<el-icon :size="app.meta.size || 40" v-if="app.meta.icon"><svg-icon :name="app.meta.icon" :color="app.meta.color"></svg-icon></el-icon>
			</nuxt-link>
			<div class="title singe-line" :title="app.name">{{ app.name }}</div>
		</div>
	</el-tooltip>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
	app: RouteItem;
}
withDefaults(defineProps<Props>(), {});
</script>
<style lang="scss" scoped>
.appliaction {
	width: 100%;
	height: 100%;
	cursor: pointer;
	.icon-wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--app-radius);
		overflow: hidden;
	}
	.title {
		color: #fff;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
	}
}
</style>
