<template>
	<div class="container-grid">
		<slot />
	</div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
const { setting, getColumnGap, getRowGap } = storeToRefs(useSettingsStore());

const screenWidth = computed(() => setting.value.app.screenWidth + setting.value.app.unit);
const width = computed(() => setting.value.app.width + 'px');
</script>

<style lang="scss" scoped>
.container-grid {
	width: v-bind(screenWidth);
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, v-bind(width));
	grid-auto-flow: dense;
	column-gap: v-bind(getColumnGap);
	row-gap: v-bind(getRowGap);
	margin: 0 auto;
	box-sizing: border-box;
	padding: 20px 0;
	padding-bottom: 60px;
}
</style>
