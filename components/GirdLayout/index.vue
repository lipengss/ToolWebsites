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
const appSize = computed(() => setting.value.app.size + 'px');
</script>

<style lang="scss" scoped>
.container-grid {
	width: v-bind(screenWidth);
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, v-bind(appSize));
	grid-template-rows: repeat(auto-fill, v-bind(appSize));
	grid-auto-flow: dense;
	column-gap: v-bind(getColumnGap);
	row-gap: v-bind(getRowGap);
	margin: 0 auto;
	box-sizing: border-box;
	padding: 20px;
	padding-bottom: 60px;
}
</style>
