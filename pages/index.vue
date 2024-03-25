<template>
	<GirdLayout>
		<GridItem size="5x2">
			<Weather />
		</GridItem>
		<GridItem size="5x2">
			<Calendar />
		</GridItem>
		<GridItem size="5x2">
			<OffWork />
		</GridItem>
		<GridItem size="1x1" v-for="app in siteList">
			<Application :app="app" />
		</GridItem>
	</GirdLayout>
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
