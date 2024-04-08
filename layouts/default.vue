<template>
	<el-container class="el-container-parent" @contextmenu.prevent="contextmenu">
		<MenuBar />
		<el-scrollbar>
			<div class="el-container-child">
				<Engines />
				<slot />
			</div>
			<el-footer>
				<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
			</el-footer>
		</el-scrollbar>
		<Loading />
		<!-- 壁纸切换 -->
		<toggleWallpaper />
		<!-- 风格配置 -->
		<Setting />
		<!-- 右键菜单 -->
		<Contextmenu ref="contextmenuRef">
			<template v-if="global">
				<div class="item" @click="changeWallpaper">
					<el-icon><svg-icon name="menu-picture" /></el-icon>
					<span>换壁纸</span>
				</div>
				<div class="item" @click="showDrawer = true">
					<el-icon><svg-icon name="setting" /></el-icon>
					<span>设置</span>
				</div>
			</template>
			<template v-else>
				<div class="item">
					<el-icon><Edit /></el-icon>
					<span>编辑</span>
				</div>
				<div class="item">
					<el-icon><svg-icon name="batchEdit" /></el-icon>
					<span>批量编辑</span>
				</div>
				<div class="item" @click="onDeleteApp">
					<el-icon><Delete /></el-icon>
					<span>删除</span>
				</div>
			</template>
		</Contextmenu>
	</el-container>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import mitt from '~/assets/utils/mitt';
import { Delete, Edit } from '@element-plus/icons-vue';
import { useSettingsStore } from '~/stores/settings';
import { developers, filterHoutWebSiteList } from '~/assets/website/index';

import { useRoute } from 'vue-router';

const route = useRoute();
const settingStore = useSettingsStore();
const toggleWallpaper = defineAsyncComponent(() => import('./components/toggleWallpaper.vue'));

const { setting, showDrawer } = storeToRefs(settingStore);
const { initGloabalSetting, changeWallpaper, setGlobalSetting } = settingStore;

const curApp = ref<RouteItem>({
	name: '',
	path: '',
	type: '',
	meta: {
		rank: 0,
		icon: '',
	},
});

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);
const asideWidth = computed(() => setting.value.menuBar.width + 'px');

const contextmenuRef = ref();
const global = ref();

function onDeleteApp() {
	const { name } = curApp.value;
	const names = setting.value.excludeWeb.map((item) => item.name);
	if (!names.includes(name)) {
		const index = developers.findIndex((item) => item.name === name);
		if (index !== -1) {
			developers.splice(index, 1);
		}
		setting.value.excludeWeb.push(curApp.value);
	}
	setGlobalSetting();
}

mitt.on('contextmenuApp', ({ event, name }) => {
	global.value = name ? false : true;
	if (!global.value) {
		const app = filterHoutWebSiteList('/').find((item) => item.name === name);
		app && (curApp.value = app);
	}
	contextmenuRef.value.contextmenu(event);
});

function contextmenu(event: any) {
	global.value = true;
	contextmenuRef.value.contextmenu(event);
}

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
	:deep .el-scrollbar {
		flex: 1;
		.el-scrollbar__view {
			height: 100%;
			.el-container-child {
				min-height: 100%;
				box-sizing: border-box;
				padding: 0 calc(v-bind(asideWidth) + 10px) 30px;
			}
		}
	}
}
.el-footer {
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -30px;
	backdrop-filter: blur(10px);
	a {
		font-size: 12px;
		color: var(--el-text-color-regular);
	}
}
</style>
