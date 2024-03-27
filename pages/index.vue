<template>
	<GirdLayout>
		<GridItem size="5x2" name="天气">
			<Weather />
		</GridItem>
		<GridItem size="5x2" name="日历">
			<Calendar />
		</GridItem>
		<GridItem size="5x2" name="下班倒计时">
			<OffWork />
		</GridItem>
		<GridItem size="1x1" v-for="app in siteList" :name="app.name">
			<Application :app="app" />
		</GridItem>
	</GirdLayout>
</template>
<script setup lang="ts">
import { developers, sortWebRanks } from '~/assets/website/index';

definePageMeta({ title: '首页' });

const siteList = computed(() => sortWebRanks(developers));
</script>
