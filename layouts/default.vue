<template>
	<el-container class="el-container-parent" @contextmenu.prevent="contextmenuRef.contextmenu($event)">
		<MenuBar />
		<el-container class="el-container-child">
			<el-scrollbar>
				<Engines />
				<div class="main"><slot /></div>
				<el-footer>
					<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
				</el-footer>
			</el-scrollbar>
		</el-container>
		<loading />
		<!-- 壁纸切换 -->
		<toggleWallpaper />
		<!-- 风格配置 -->
		<Setting />
		<!-- 右键菜单 -->
		<contextmenu ref="contextmenuRef" />
	</el-container>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';

const loading = defineAsyncComponent(() => import('./components/loading.vue'));
const toggleWallpaper = defineAsyncComponent(() => import('./components/toggleWallpaper.vue'));
const contextmenu = defineAsyncComponent(() => import('./components/contextmenu.vue'));

import { useSettingsStore } from '~/stores/settings';
const settingStore = useSettingsStore();

const { setting } = storeToRefs(settingStore);
const { initGloabalSetting } = settingStore;

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);
const asideWidth = computed(() => setting.value.menuBar.width + 'px');

const contextmenuRef = ref();

onMounted(() => {
	initGloabalSetting();
});
</script>
<style lang="scss" scoped>
.el-container-parent {
	flex-direction: row;
	position: relative;
	&::before,
	&::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	&::before {
		background-color: v-bind(bgOpacity);
	}
	&::before {
		backdrop-filter: v-bind(bgBlur);
	}

	.el-container-child {
		flex-direction: column;
		.main {
			position: relative;
			padding: 0 calc(v-bind(asideWidth) + 10px);
		}
	}
}
.el-footer {
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
	bottom: 0;
	font-size: 12px;
	color: var(--el-text-color-regular);
}
</style>
././components/loading.vue./components/toggleWallpaper.vuecomponents/contextmenu.vue
