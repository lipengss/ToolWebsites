<template>
	<el-aside :width="menuWidth">
		<Menu />
		<div class="setting">
			<el-icon size="18px" class="icon" @click="settingStore.openSettingDrawer()" title="设置">
				<svg-icon name="setting" />
			</el-icon>
			<el-icon size="18px" class="icon" @click="open()" title="吸色器">
				<svg-icon name="dye-color" />
			</el-icon>
		</div>
	</el-aside>

	<!-- <el-header>
				<div class="el-in-center">
					<Menu class="menu-horizontal" />
					<el-button class="expand" :icon="Expand" @click="state.isDrawer = !state.isDrawer" />
					<el-space>
						<el-autocomplete v-model="state.context" :fetch-suggestions="querySearch" clearable placeholder="站内搜索" @select="handleSelect">
							<template #prefix>
								<el-icon><Search /></el-icon>
							</template>
						</el-autocomplete>
						<el-tooltip effect="light" :content="`${isDark ? '夜间模式' : '日间模式'}`" placement="bottom">
							<el-button :icon="isDark ? Moon : Sunny" @click="toggleDark()" />
						</el-tooltip>
						<el-tooltip effect="light" content="吸色器" placement="bottom">
							<el-button @click="open()">
								<el-icon><svg-icon name="dye-color" /></el-icon>
							</el-button>
						</el-tooltip>
					</el-space>
					<el-drawer v-model="state.isDrawer" direction="ltr" size="80%" :show-close="false">
						<Menu mode="vertical" />
					</el-drawer>
				</div>
			</el-header> -->
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { Moon, Sunny, Expand, Search } from '@element-plus/icons-vue';
import { useEyeDropper } from '@vueuse/core';
import { flattenArray } from '~/assets/utils/tools';
import { routeList } from '~/assets/utils/routeList';
import Menu from './Menu.vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const settingStore = useSettingsStore();

const menuWidth = computed(() => settingStore.setting.basic.asideMenuWidth + 'px');

const { open, sRGBHex } = useEyeDropper();

const state = reactive({
	isDrawer: false,
	context: '',
});

function handleSelect() {}

const hotRoutes = computed(() => {
	const routes = flattenArray(routeList);
	return routes;
});

function querySearch(queryString: string, callback: any) {
	const result = queryString ? hotRoutes.value.filter((item: RouteItem) => item.name.indexOf(queryString) !== -1) : hotRoutes.value;
	const mapResult = result.map((item: RouteItem) => ({ value: item.name, link: item.path }));
	callback(mapResult);
}

watch(
	() => sRGBHex.value,
	(hex) => {
		ElNotification({
			title: '吸取色值',
			type: 'success',
			position: 'bottom-left',
			message: h('div', { style: `color: ${hex}` }, hex),
		});
	}
);
</script>
<style lang="scss" scoped>
.el-aside {
	height: 100vh;
	display: flex;
	flex-direction: column;
	backdrop-filter: blur(6px);
	background-color: rgba(1, 48, 96), 0.1;
	padding: 100px 0 60px 0;
	color: rgba(233, 233, 233, 0.6);
	overflow-y: hidden;
	.setting {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.el-icon {
			padding: 10px 0;
			cursor: pointer;
		}
		.icon {
			transition: all 0.3s ease-in-out;
			&:hover {
				transform: rotate(80deg) scale(1.2);
			}
		}
	}
}

// 显示小屏幕的菜单
// @media (max-width: 1024px) {
// 	.el-header {
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 		.el-in-center {
// 			width: 100%;
// 			.expand {
// 				display: block;
// 			}
// 			.menu-horizontal {
// 				display : none;
// 			}
// 			:deep .el-autocomplete {
// 				display: none;
// 			}
// 		}
// 	}

// 	:deep .el-drawer__body {
// 		padding: 0;
// 		.el-menu {
// 			border-right: none;
// 		}
// 	}
// }
</style>
