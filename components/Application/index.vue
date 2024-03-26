<template>
	<el-tooltip effect="light" :content="app.meta.description" placement="top">
		<div class="appliaction">
			<div class="icon-wrap" :style="{ backgroundColor: app.meta.bgColor }" @click="onclick">
				<el-icon :size="app.meta.size || 40" v-if="app.meta.icon"><svg-icon :name="app.meta.icon" :color="app.meta.color"></svg-icon></el-icon>
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
	}
}
</style>
