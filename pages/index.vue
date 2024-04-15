<template>
	<GirdLayout>
		<template v-for="app in siteList">
			<GridItem v-if="app.type === 'card'" size="5x2" :name="app.name">
				<component :is="card[app.component]" />
			</GridItem>
			<GridItem v-else size="1x1" :name="app.name">
				<Application :app="app" />
			</GridItem>
		</template>
		<AddedApp />
	</GirdLayout>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue';

import { filterHoutWebSiteList } from '~/assets/website/index';
const siteList = computed(() => filterHoutWebSiteList('/'));

definePageMeta({ title: '产品' });

const card: any = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};
</script>
<style lang="scss" scoped></style>
