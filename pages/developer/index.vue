<template>
	<GirdLayout>
		<GridItem size="1x1" v-for="app in siteList">
			<Application :app="app" />
		</GridItem>
	</GirdLayout>
</template>
<script setup lang="ts">
import { filterHoutWebSiteList } from '~/assets/website/index';
const siteList = computed(() => filterHoutWebSiteList('developer'));
</script>
