<template>
	<ClientOnly>
		<el-aside :width="menuWidth" :class="{ 'hide-sidebar': autoHide && x > settingStore.setting.menuBar.width }">
			<Menu />
			<div class="setting">
				<el-tooltip content="设置" placement="right">
					<el-icon size="18px" class="icon rotate" @click="settingStore.openSettingDrawer()">
						<svg-icon name="setting" />
					</el-icon>
				</el-tooltip>
				<el-tooltip content="吸色器" placement="right">
					<el-icon size="18px" class="icon zoom" @click="open()">
						<svg-icon name="dye-color" />
					</el-icon>
				</el-tooltip>
				<el-tooltip :content="isDark ? '夜间模式' : '日间模式'" placement="right">
					<el-icon size="18px" class="icon rotate" @click="toggleDark()">
						<Moon v-if="isDark" />
						<Sunny v-else />
					</el-icon>
				</el-tooltip>
				<el-tooltip content="回收站" placement="right">
					<el-icon size="18px" class="icon zoom" @click="onJumpTrashPage">
						<svg-icon name="trash" />
					</el-icon>
				</el-tooltip>
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
import { useRouter } from 'vue-router';

const router = useRouter();
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

function onJumpTrashPage() {
	router.push({ path: '/trash' });
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
			transition: all 0.3s ease-in-out;
		}
		.rotate {
			&:hover {
				transform: rotate(80deg) scale(1.2);
			}
		}
		.zoom {
			&:hover {
				transform: scale(1.3);
			}
		}
	}
}
.hide-sidebar {
	transform: translateX(v-bind(translateX));
}
</style>
