<template>
	<div class="box">
		<div class="icon">
			<img :src="props.url + '/favicon.ico'" :width="props.width" :height="props.height" />
		</div>
		<div class="title">{{ props.title }}</div>
	</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
interface Props {
	url: string;
	title: string;
	width?: number;
	height?: number;
}
const props = withDefaults(defineProps<Props>(), {
	url: '',
	title: '',
	width: 40,
	height: 40,
});
</script>
<style lang="scss" scoped>
.box {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.icon {
		margin-bottom: 4px;
	}
	.title {
		font-size: 12px;
		color: var(--el-text-color-primary);
	}
}
</style>
