<template>
	<GirdLayout>
		<div class="grid-item" v-for="app in siteList">
			<Application :app="app" />
		</div>
	</GirdLayout>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { filterHoutWebSiteList } from '~/assets/website/index';
const siteList = computed(() => filterHoutWebSiteList('onlineTool'));
</script>
