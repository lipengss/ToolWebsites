<template>
	<el-space>
		<div class="circle-item" v-for="color in props.defaultColor" :key="color">
			<div class="circle" :style="`--color:${color}`"></div>
		</div>
		<el-color-picker v-model="props.color" @change="onColorChange" />
	</el-space>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
	defaultColor: Array<string>;
	color: string;
}
const props = withDefaults(defineProps<Props>(), {});

const emits = defineEmits(['update:color']);

function onColorChange(color: string | null) {
	emits('update:color', color);
}
</script>
<style lang="scss" scoped>
.circle-item {
	padding: 4px;
	border: 1px solid var(--el-border-color);
	border-radius: 3px;
}
.circle {
	width: 22px;
	height: 22px;
	background-color: var(--color);
	border-radius: 3px;
	cursor: pointer;
}
</style>
