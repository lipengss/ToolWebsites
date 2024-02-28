<template>
	<el-affix :offset="0">
		<el-header class="el-header">
			<div class="el-in-center">
				<Menu class="menu-horizontal" />
				<el-button class="expand" :icon="Expand" @click="state.isDrawer = !state.isDrawer" />
				<el-space>
					<el-autocomplete v-model="state.context" :fetch-suggestions="querySearch" clearable placeholder="站内搜索" @select="handleSelect">
						<template #prefix>
							<el-icon><Search /></el-icon>
						</template>
					</el-autocomplete>
					<el-tooltip effect="dark" :content="`${isDark ? '夜间模式' : '日间模式'}`" placement="bottom">
						<el-button :icon="isDark ? Moon : Sunny" @click="toggleDark()" />
					</el-tooltip>
					<el-tooltip effect="dark" content="吸色器" placement="bottom">
						<el-button @click="open()">
							<el-icon><svg-icon name="dye-color" /></el-icon>
						</el-button>
					</el-tooltip>
				</el-space>
				<el-drawer v-model="state.isDrawer" direction="ltr" size="80%" :show-close="false">
					<Menu mode="vertical" />
				</el-drawer>
			</div>
		</el-header>
	</el-affix>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { Moon, Sunny, Expand, Search } from '@element-plus/icons-vue';
import { useDark, useToggle, useEyeDropper } from '@vueuse/core';
import { flattenArray } from '~/assets/utils/tools';
import { routeList } from '~/assets/utils/routeList';
import Menu from './Menu.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

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
.el-header {
	background-color: var(--el-bg-color);
	border-bottom: 1px solid var(--el-border-color);
	.el-in-center {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.menu-horizontal {
			flex: 1;
		}
		.expand {
			display: none;
		}
	}
}

// 显示小屏幕的菜单
@media (max-width: 1024px) {
	.el-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.el-in-center {
			width: 100%;
			.expand {
				display: block;
			}
			.menu-horizontal {
				display: none;
			}
			:deep .el-autocomplete {
				display: none;
			}
		}
	}

	:deep .el-drawer__body {
		padding: 0;
		.el-menu {
			border-right: none;
		}
	}
} /*>=1024的设备*/
</style>
