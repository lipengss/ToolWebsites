<template>
	<el-tooltip effect="light" :content="app.meta.description" placement="top" :show-after="500">
		<div class="appliaction" data-type="app" @contextmenu.prevent="onContextmenu" @click="onclick">
			<div class="mask"></div>
			<div class="icon-wrap" :style="{ backgroundColor: app.meta.bgColor }">
				<div v-if="app.meta.type === 'img'" class="favicon" :width="app.meta.size" :height="app.meta.size">
					<img :src="app.meta.value" width="100%" height="100%" />
				</div>
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
import mitt from '~/assets/utils/mitt';

const { setting } = storeToRefs(useSettingsStore());
const { setGlobalSetting } = useSettingsStore();

interface Props {
	app: RouteItem;
	link?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	link: true,
});

const size = computed(() => props.app.meta.size + 'px');
const bgColor = computed(() => props.app.meta.bgColor || '#fff');

function onclick() {
	const { name } = props.app;
	if (!name) return;
	if (Object.prototype.hasOwnProperty.call(setting.value.hotWebRanks, name)) {
		setting.value.hotWebRanks[name]++;
	} else {
		setting.value.hotWebRanks[name] = 1;
	}
	setGlobalSetting();
	if (props.link) window.open(props.app.path);
}

function onContextmenu(event: any) {
	const { clientX, clientY } = event;
	const { type } = event.target.parentNode.dataset;
	mitt.emit('contextmenuApp', {
		app: props.app,
		type,
		clientX,
		clientY,
	});
}
</script>
<style lang="scss" scoped>
.appliaction {
	width: 100%;
	height: 100%;
	cursor: pointer;
	position: relative;
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}
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
			text-align: center;
			font-size: 1.5em;
			line-height: 26px;
			font-weight: bold;
			color: v-bind('props.app.meta.color');
		}
		.favicon {
			width: v-bind(size);
			height: v-bind(size);
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: v-bind(bgColor);
		}
	}
}
</style>
