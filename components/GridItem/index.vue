<template>
	<div :class="`app-container-size-${meta.layout} animate__animated animate__fadeIn`" :style="`--delay:${index}s`">
		<template v-if="meta.tag.includes('card') && meta.layout === '5x2'">
			<div class="app-item">
				<component :is="card[app.component]" />
			</div>
			<div v-if="showTitle" class="app-name">{{ props.app.name }}</div>
		</template>
		<template v-else>
			<div class="app-item" @contextmenu.stop="onContextmenu" @click="onclick" data-type="app">
				<div class="mask"></div>
				<Application :app="app" />
			</div>
			<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center">
				<div v-if="meta.layout === '1x1' && showTitle" class="app-name">{{ props.app.name }}</div>
				<div v-if="meta.layout === '3x1'" class="app-name">{{ props.app.name }}</div>
				<div v-if="meta.layout === '3x1'" class="description">{{ meta.description }}</div>
			</div>
		</template>
	</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import mitt from '~/assets/utils/mitt';

interface Props {
	index: number;
	app: RouteItem;
	disabledContextmenu?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	disabledContextmenu: false,
});

const card: { [key: string]: any } = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};

const meta = computed(() => props.app.meta);

const { setting, getRowGap, getColumnGap } = storeToRefs(useSettingsStore());
const { setGlobalSetting } = useSettingsStore();

// 应用全局设置
const appSize = computed(() => `${setting.value.app.size}px`);
const radius = computed(() => setting.value.app.radius + 'px');
const opacity = computed(() => setting.value.app.opacity);
const showTitle = computed(() => setting.value.app.showTitle);

// 应用个性化设置
const color = computed(() => meta.value.color || '#fff');
const bgColor = computed(() => meta.value.bgColor || '#000');

function onclick() {
	if (meta.value.tag.includes('card')) return;
	const { name } = props.app;
	if (!name) return;
	if (Object.prototype.hasOwnProperty.call(setting.value.hotWebRanks, name)) {
		setting.value.hotWebRanks[name]++;
	} else {
		setting.value.hotWebRanks[name] = 1;
	}
	setGlobalSetting();
	window.open(props.app.path);
}

function onContextmenu(event: any) {
	event.preventDefault();
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
$columnGap: v-bind(getColumnGap);
$rowGap: v-bind(getRowGap);
.animate__animated {
	animation-delay: calc(0.01 * var(--delay));
}
div[class*='app-container'] {
	cursor: pointer;
	position: relative;
	border-radius: v-bind(radius);
	.app-name {
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		color: v-bind(color);
		overflow: hidden;
		text-overflow: ellipsis;
		opacity: v-bind(opacity);
	}
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}
}
.app-container-size-1x1 {
	width: v-bind(appSize);
	height: v-bind(appSize);
	.app-item {
		width: v-bind(appSize);
		height: v-bind(appSize);
		border-radius: v-bind(radius);
		background-color: v-bind(bgColor);
		overflow: hidden;
		opacity: v-bind(opacity);
		&:hover {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		}
	}
	.app-name {
		flex: 1;
		width: 100%;
		font-size: 12px;
		text-align: center;
	}
}
.app-container-size-3x1 {
	width: calc((v-bind(appSize) * 3) + (2 * $columnGap));
	height: v-bind(appSize);
	grid-column: span 3;
	display: flex;
	background-color: v-bind(bgColor);
	opacity: v-bind(opacity) !important;
	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
	.app-item {
		width: v-bind(appSize);
		height: v-bind(appSize);
		border-radius: v-bind(radius);
		overflow: hidden;
		flex-shrink: 0;
	}
	.app-name {
		height: 20px !important;
		line-height: 20px !important;
		margin-bottom: -2px;
		text-align: left;
		font-weight: bold;
	}
	.description {
		text-align: justify;
		font-size: 12px;
		padding-right: 6px;
		line-height: 18px;
		box-sizing: border-box;
		color: v-bind(color);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		opacity: v-bind(opacity);
	}
}
.app-container-size-5x2 {
	width: calc((v-bind(appSize) * 5) + (4 * $columnGap));
	height: calc((v-bind(appSize) * 2) + $rowGap);
	grid-column: span 5;
	grid-row: span 2;
	.app-item {
		width: 100%;
		height: 100%;
		border-radius: v-bind(radius);
		opacity: v-bind(opacity);
		overflow: hidden;
	}
	.app-name {
		text-align: center;
	}
}
</style>
