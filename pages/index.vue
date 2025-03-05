<template>
	<div class="container-vertical">
		<filter-tag v-model:active="active" />
		<GirdLayout>
			<GridItem v-for="(app, index) in getApps(active)" :app="app" :index="index" />
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
