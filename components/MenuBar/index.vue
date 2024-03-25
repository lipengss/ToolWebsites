<template>
	<ClientOnly>
		<el-aside :width="menuWidth" :class="{ 'hide-sidebar': autoHide && x > settingStore.setting.menuBar.width }">
			<Menu />
			<div class="setting">
				<el-icon size="18px" class="icon" @click="settingStore.openSettingDrawer()" title="设置">
					<svg-icon name="setting" />
				</el-icon>
				<el-icon size="18px" class="icon" @click="open()" title="吸色器">
					<svg-icon name="dye-color" />
				</el-icon>
				<el-icon size="18px" class="icon" @click="toggleDark()" :title="isDark ? '夜间模式' : '日间模式'">
					<Moon v-if="isDark" />
					<Sunny v-else />
				</el-icon>
			</div>
		</el-aside>
	</ClientOnly>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Menu from './Menu.vue';
import { Moon, Sunny } from '@element-plus/icons-vue';
import { useDark, useToggle, useEyeDropper, useMouseInElement } from '@vueuse/core';
import { useSettingsStore } from '~/stores/settings';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { x } = useMouseInElement();

const settingStore = useSettingsStore();

const autoHide = computed(() => settingStore.setting.menuBar.autoHide);
const menuWidth = computed(() => settingStore.setting.menuBar.width + 'px');
const bgColor = computed(() => settingStore.setting.menuBar.bgColor);
const color = computed(() => settingStore.setting.menuBar.color);

const translateX = computed(() => -settingStore.setting.menuBar.width + 'px');

const { open, sRGBHex } = useEyeDropper();

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
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	backdrop-filter: blur(6px);
	background-color: v-bind(bgColor);
	padding: 100px 0 60px 0;
	color: v-bind(color);
	overflow-y: hidden;
	transition: all 0.2s ease-in-out;
	transform: translateX(0);
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
.hide-sidebar {
	transform: translateX(v-bind(translateX));
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
