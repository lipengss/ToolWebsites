<template>
	<div class="container-grid">
		<div class="grid-item" v-for="app in siteList">
			<Application :app="app" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { filterHoutWebSiteList } from '~/assets/website/index';
const siteList = computed(() => filterHoutWebSiteList('entertainment'));
</script>
