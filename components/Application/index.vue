<template>
	<el-tooltip effect="light" :content="app.meta.description" placement="top">
		<div class="appliaction">
			<div class="icon-wrap" :style="{ backgroundColor: app.meta.bgColor }" @click="onclick">
				<img v-if="app.meta.type === 'img'" :src="app.meta.value" :width="app.meta.size" :height="app.meta.size" />
				<el-icon v-else-if="app.meta.type === 'icon' && app.meta.value" :size="app.meta.size || 40">
					<svg-icon :name="app.meta.value" :color="app.meta.color"></svg-icon>
				</el-icon>
				<div v-else class="icon-text" :style="{ width: app.meta.size + 'px', height: app.meta.size + 'px' }">{{ app.meta.value }}</div>
			</div>
		</div>
	</el-tooltip>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { setting } = storeToRefs(useSettingsStore());
const { setGlobalSetting } = useSettingsStore();

interface Props {
	app: RouteItem;
}
const props = withDefaults(defineProps<Props>(), {});

function onclick() {
	window.open(props.app.path);
	const { icon } = props.app.meta;
	if (!icon) return;
	if (Object.prototype.hasOwnProperty.call(setting.value.hotWebRanks, icon)) {
		setting.value.hotWebRanks[icon]++;
	} else {
		setting.value.hotWebRanks[icon] = 1;
	}
	setGlobalSetting();
}
</script>
<style lang="scss" scoped>
.appliaction {
	width: 100%;
	height: 100%;
	cursor: pointer;
	.icon-wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		.icon-text {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
		}
	}
}
</style>
