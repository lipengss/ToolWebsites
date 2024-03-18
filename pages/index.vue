<template>
	<div class="container-full">
		<div class="grid-item weather-item">
			<Weather />
		</div>
		<div class="grid-item calendar-item">
			<Calendar />
		</div>
		<div class="grid-item off-work-item">
			<OffWork />
		</div>
		<div class="grid-item icon-size-1x1" v-for="app in data">
			<div class="appliaction">
				<img src="~/assets/img/npm.png" width="100%" height="100%" />
				<span class="title">{{ app.name }}</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { data } from '../assets/website/coder';

definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});
</script>
<style lang="scss" scoped>
.container-full {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, 60px);
	grid-template-rows: repeat(auto-fill, 60px);
	gap: 20px;
	padding: 20px;
	box-sizing: border-box;
	.grid-item {
		border-radius: 10px;
		overflow: hidden;
	}
	.icon-size-1x1 {
		width: 60px;
		height: 60px;
	}
	.weather-item,
	.calendar-item,
	.off-work-item {
		grid-column: span 5;
		grid-row: span 2;
	}
}
</style>
