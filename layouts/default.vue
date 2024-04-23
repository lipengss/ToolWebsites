<template>
	<el-container class="el-container-parent" @contextmenu.prevent="contextmenu">
		<!-- <MenuBar />
		<div class="el-container-child">
			<el-scrollbar class="my-scrollbar">
				<div class="main" ref="mainRef">
					<Engines />
					<slot />
				</div>
			</el-scrollbar>
			<el-footer>
				<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
			</el-footer>
		</div> -->
		<Swiper
			direction="vertical"
			:mousewheel="true"
			:loop="true"
			:pagination="{
				clickable: true,
			}"
			:modules="[SwiperMousewheel, SwiperPagination, SwiperNavigation]"
			@slideChange="slideChange"
		>
			<SwiperSlide v-for="route in swiperSlideData" :key="route.path">
				<GirdLayout v-if="route.children">
					<template v-for="app in route.children">
						<GridItem v-if="app.type === 'card'" size="5x2" :name="app.name">
							<component :is="card[app.component]" />
						</GridItem>
						<GridItem v-else size="1x1" :name="app.name">
							<Application :app="app" />
						</GridItem>
					</template>
					<AddedApp />
				</GirdLayout>
			</SwiperSlide>
		</Swiper>
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
import { routeList } from '~/assets/utils/routeList';

const mainRef = ref();

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
		layout: '',
	},
});

const card: any = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);
const asideWidth = computed(() => setting.value.menuBar.width + 'px');

const contextmenuRef = ref();
const global = ref();

const swiperSlideData = computed(() => {
	const result = routeList.map((route) => {
		route.children = filterHoutWebSiteList(route.type);
		return route;
	});
	console.log(result);
	return result;
});

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

function slideChange({ activeIndex }) {
	console.log(activeIndex);
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
	.swiper {
		width: 100%;
	}
	.el-container-child {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	:deep .my-scrollbar {
		flex: 1;
		.el-scrollbar__view {
			box-sizing: border-box;
			padding: 0 calc(v-bind(asideWidth) + 10px) 30px;
		}
	}
	.main {
		padding-top: calc(10vh + 153px);
	}
}
.slide-text {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 60px;
	color: #fff;
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
