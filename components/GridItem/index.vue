<template>
	<div :class="`app-size-${props.size}`" class="app-wrapper">
		<div class="app-box">
			<slot />
		</div>
		<div class="name singe-line">{{ props.name }}</div>
	</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { setting } = storeToRefs(useSettingsStore());

const appSize = computed(() => `${setting.value.app.size}px`);
const columnGap = computed(() => {
	const { async, gap, columnGap } = setting.value.app;

	return (async ? gap : columnGap) + 'px';
});

const columnPosition = computed(() => -columnGap.value);

const rowGap = computed(() => {
	const { async, gap, rowGap } = setting.value.app;
	return (async ? gap : rowGap) + 'px';
});

interface Props {
	size: '1x1' | '1x2' | '2x2' | '5x2';
	name?: string;
}

const props = withDefaults(defineProps<Props>(), {
	size: '1x1',
});

const radius = computed(() => setting.value.app.radius + 'px');
const opacity = computed(() => setting.value.app.opacity);
</script>
<style lang="scss" scoped>
$width: v-bind(appSize);
$height: v-bind(appSize);
$columnGap: v-bind(columnGap);
$rowGap: v-bind(rowGap);
.app-wrapper {
	position: relative;
	opacity: v-bind(opacity);
	.name {
		width: 100%;
		height: v-bind(columnGap);
		line-height: v-bind(columnGap);
		position: absolute;
		bottom: v-bind(columnPosition);
		font-size: 12px;
		text-align: center;
		color: #fff;
	}
}
.app-box {
	height: 100%;
	border-radius: v-bind(radius);
	overflow: hidden;
}
.app-size-1x1 {
	width: $width;
	height: $width;
}
.app-size-1x2 {
	width: $width;
	height: calc(($height * 2) + $rowGap);
	grid-column: span 1;
	grid-row: span 2;
}
.app-size-2x2 {
	width: calc(($width * 2) + $columnGap);
	height: calc(($height * 2) + $rowGap);
	grid-column: span 2;
	grid-row: span 2;
}
.app-size-5x2 {
	width: calc(($width * 5) + (4 * $columnGap));
	height: calc(($width * 2) + $rowGap);
	grid-column: span 5;
	grid-row: span 2;
}
</style>
