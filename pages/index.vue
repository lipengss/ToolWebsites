<template>
	<div class="container-grid">
		<div class="grid-item weather-item">
			<Weather />
		</div>
		<div class="grid-item calendar-item">
			<Calendar />
		</div>
		<div class="grid-item off-work-item">
			<OffWork />
		</div>
		<div class="grid-item" v-for="app in siteList">
			<Application :app="app" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { filterHoutWebSiteList } from '~/assets/website/index';
definePageMeta({
	title: '首页',
	rank: 0,
	icon: 'menu-home',
});

const siteList = computed(() => filterHoutWebSiteList('developer'));
</script>
<style lang="scss" scoped>
.container-grid {
	.weather-item,
	.calendar-item,
	.off-work-item {
		grid-column: span 5;
		grid-row: span 2;
	}
}
</style>
