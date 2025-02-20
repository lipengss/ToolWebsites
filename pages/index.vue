<template>
	<div class="container-vertical">
		<filter-tag :filter="[]" />
		<GirdLayout>
			<template v-for="(app, index) in appList">
				<GridItem v-if="app.type === 'card'" size="5x2" :name="app.name" :index="index">
					<component :is="card[app.component]" />
				</GridItem>
				<GridItem v-else size="1x1" :name="app.name" :index="index">
					<Application :app="app" />
				</GridItem>
			</template>
		</GirdLayout>
	</div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSettingsStore } from '~/stores/settings';
import { filterHoutWebSiteList } from '~/assets/website/index';
const settingStore = useSettingsStore();
const { initGlobalSetting } = settingStore;

const activeTag = ref('all');

const appList = computed(() => {
	const list = filterHoutWebSiteList('/');
	if (activeTag.value === 'all') {
		return list;
	} else {
		return list.filter((n) => n.meta.tag && n.meta.tag.includes(activeTag.value));
	}
});

const card: { [key: string]: any } = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};

onMounted(() => {
	initGlobalSetting();
});
</script>
<style lang="scss" scoped>
.filter-tag {
	margin: 0 auto;
	.el-tag {
		cursor: pointer;
	}
}
</style>
