<template>
	<div class="container" @contextmenu.prevent="contextmenu">
		<Engines />
		<div class="tags">
			<el-check-tag type="success">全部</el-check-tag>
			<el-check-tag v-for="tag in tagList" :key="tag.value" type="success">{{ tag.label }}</el-check-tag>
		</div>
		<Swiper
			class="swiper-parent"
			:modules="[SwiperMousewheel]"
			loop
			direction="vertical"
			:mousewheel="true"
			:initialSlide="setting.menuBar.appSlideIndex"
			@swiper="(instance) => (swiper = instance)"
			@slideChange="({ realIndex }) => (setting.menuBar.appSlideIndex = realIndex)"
		>
			<template v-for="route in swiperSlideData" :key="route.path">
				<SwiperSlide v-if="route.children" style="overflow: hidden">
					<Swiper
						:modules="[SwiperFreeMode, SwiperMousewheel]"
						direction="vertical"
						slidesPerView="auto"
						:nested="true"
						:freeMode="true"
						:mousewheel="true"
					>
						<SwiperSlide class="swiper-slide-child">
							<template v-for="app in route.children">
								<GridItem v-if="app.type === 'card'" size="5x2" :name="app.name">
									<component :is="card[app.component]" />
								</GridItem>
								<GridItem v-else size="1x1" :name="app.name">
									<Application :app="app" />
								</GridItem>
							</template>
							<AddedApp />
						</SwiperSlide>
					</Swiper>
				</SwiperSlide>
			</template>
		</Swiper>
	</div>
	<!-- 风格配置 -->
	<ClientOnly>
		<Setting />
	</ClientOnly>
	<!-- 菜单 -->
	<MenuBar />
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
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { Delete, Edit } from '@element-plus/icons-vue';
import { developers, filterHoutWebSiteList } from '~/assets/website/index';
import { tagList } from '~/assets/utils/publicData';
import { routeList } from '~/assets/utils/routeList';
import mitt from '~/assets/utils/mitt';
const settingStore = useSettingsStore();
const { setting, showDrawer } = storeToRefs(useSettingsStore());
const { initGloabalSetting, changeWallpaper, setGlobalSetting } = settingStore;

let swiper: any = null;

const global = ref();
const contextmenuRef = ref();
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
const tagChecked = reactive({});

const screenWidth = computed(() => setting.value.app.sceenWidth + setting.value.app.unit);
const appSize = computed(() => setting.value.app.size + 'px');
const columnGap = computed(() => {
	const { async, gap, columnGap } = setting.value.app;
	return (async ? gap : columnGap) + 'px';
});
const rowGap = computed(() => {
	const { async, gap, rowGap } = setting.value.app;
	return (async ? gap : rowGap) + 'px';
});
const swiperSlideData = computed(() => {
	const result = routeList.map((route) => {
		route.children = filterHoutWebSiteList(route.type);
		return route;
	});
	return result;
});

const card: any = {
	Weather: resolveComponent('Weather'),
	Calendar: resolveComponent('Calendar'),
	OffWork: resolveComponent('OffWork'),
};
function contextmenu(event: any) {
	global.value = true;
	contextmenuRef.value.contextmenu(event);
}
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

mitt.on('onMenuChange', (index: number) => {
	if (!swiper.destroyed) {
		swiper.slideToLoop(index, 500);
	}
});

onMounted(() => {
	initGloabalSetting();
});
</script>
<style lang="scss" scoped>
.container {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: relative;
	.tags {
		width: v-bind(screenWidth);
		position: relative;
		margin: auto;
		display: flex;
		justify-content: center;
		padding-top: 20px;
		padding-bottom: 20px;
		.el-check-tag {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}
	.swiper-parent {
		flex: 1;
		height: 100%;
	}
}
.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide-child {
	width: v-bind(screenWidth);
	height: auto;
	box-sizing: border-box;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, v-bind(appSize));
	grid-template-rows: repeat(auto-fill, v-bind(appSize));
	grid-row: auto;
	grid-auto-flow: dense;
	column-gap: v-bind(columnGap);
	row-gap: v-bind(rowGap);
	margin: 0 auto;
	padding-top: 20px;
	padding-bottom: 50px;
}
</style>
