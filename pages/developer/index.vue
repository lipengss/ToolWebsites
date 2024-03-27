<template>
	<GirdLayout>
		<GridItem size="1x1" v-for="app in siteList" :name="app.name">
			<Application :app="app" />
		</GridItem>
	</GirdLayout>
</template>
<script setup lang="ts">
import { filterHoutWebSiteList } from '~/assets/website/index';
const siteList = computed(() => filterHoutWebSiteList('developer'));
definePageMeta({ title: '程序员' });
</script>
