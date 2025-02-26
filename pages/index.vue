<template>
	<div class="container-vertical">
		<filter-tag v-model:active="active" />
		<GirdLayout>
			<template v-for="(app, index) in getApps(active)">
				<GridItem v-if="app.meta.tag.includes('card')" size="5x2" :name="app.name" :index="index">
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
import { ref, onMounted } from 'vue';
import { useSettingsStore } from '~/stores/settings';
import { useApp } from '~/hooks/useApp';
const settingStore = useSettingsStore();
const { initGlobalSetting } = settingStore;

const active = ref('all');
const { getApps } = useApp();

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
