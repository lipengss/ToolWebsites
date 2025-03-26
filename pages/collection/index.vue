<template>
	<GirdLayout>
		<Card size="1x1" v-for="(app, index) in siteList" :app="app" :index="index" />
	</GirdLayout>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { setting } = storeToRefs(useSettingsStore());
const { setGlobalSetting } = useSettingsStore();

const siteList = computed(() => setting.value.collectionWeb);

function onResetWebSite(app: RouteItem) {
	const { name } = app;
	const index = siteList.value.findIndex((item) => item.name === name);
	if (index !== -1) {
		setting.value.collectionWeb.splice(index, 1);
		setGlobalSetting();
	}
}
const radius = computed(() => setting.value.app.radius + 'px');

definePageMeta({ title: '收藏夹' });
</script>
<style scoped lang="scss">
.app-box {
	position: relative;
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 200;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.1s ease-in;
		background-color: rgba(0, 0, 0, 0);
		border-radius: v-bind(radius);
		color: #fff;
		opacity: 0;
		span {
			padding-top: 6px;
			font-size: 12px;
		}
		&:hover {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
}
</style>
