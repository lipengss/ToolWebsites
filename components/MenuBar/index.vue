<template>
	<ClientOnly>
		<el-aside :width="menuWidth" :class="{ 'hide-sidebar': autoHide && x > setting.menuBar.width }">
			<div class="menu">
				<el-scrollbar>
					<div
						class="item"
						v-for="route in appTypeList"
						:key="route.path"
						:class="{ active: route.path === routePath }"
						@click="onChangeMenu(route.path)"
					>
						<el-icon>
							<svg-icon v-if="route.meta.icon" :name="route.meta.icon" />
						</el-icon>
						<div class="title">{{ route.name }}</div>
					</div>
				</el-scrollbar>
			</div>
			<div class="setting">
				<el-tooltip content="设置" placement="right" effect="light">
					<div class="item" @click="openSettingDrawer()">
						<el-icon :size="18" class="icon rotate" id="global-setting">
							<svg-icon name="setting" />
						</el-icon>
					</div>
				</el-tooltip>
				<el-tooltip content="收藏" placement="right" effect="light">
					<div class="item" :class="{ active: '/collection' === routePath }" @click="onChangeMenu('/collection')">
						<el-icon :size="20" class="icon zoom" id="global-setting">
							<Star />
						</el-icon>
					</div>
				</el-tooltip>
				<el-tooltip content="回收站" placement="right" effect="light">
					<div class="item" :class="{ active: '/trash' === routePath }" @click="onChangeMenu('/trash')">
						<el-icon :size="18" class="icon zoom">
							<svg-icon name="trash" />
						</el-icon>
					</div>
				</el-tooltip>
			</div>
		</el-aside>
	</ClientOnly>
	<!-- 风格配置 -->
	<Setting />
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { useEyeDropper, useMouseInElement } from '@vueuse/core';
import { Star } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { appTypeList } from '~/assets/utils/publicData';
const { openSettingDrawer, openTour } = useSettingsStore();
const { setting } = storeToRefs(useSettingsStore());

const route = useRoute();
const router = useRouter();

const { x } = useMouseInElement();

const autoHide = computed(() => setting.value.menuBar.autoHide);
const menuWidth = computed(() => setting.value.menuBar.width + 'px');
const bgColor = computed(() => setting.value.menuBar.bgColor);
const color = computed(() => setting.value.menuBar.color);

const translateX = computed(() => -setting.value.menuBar.width + 'px');

const { sRGBHex } = useEyeDropper();

const routePath = ref(route.path);

function onChangeMenu(path: string | undefined) {
	if (typeof path !== 'string') return;
	router.push({ path });
	routePath.value = path;
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
	z-index: 200;
	display: flex;
	flex-direction: column;
	backdrop-filter: blur(6px);
	background-color: v-bind(bgColor);
	padding: 100px 0 60px 0;
	color: v-bind(color);
	overflow-y: hidden;
	transition: all 0.2s ease-in-out;
	transform: translateX(0);
	.menu {
		flex: 1;
		overflow-y: auto;
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
			cursor: pointer;
			.title {
				font-size: 12px;
				padding-top: 4px;
			}
			.el-icon {
				transition: all 0.2s ease-in-out;
			}
			&:hover {
				.el-icon {
					transform: scale(1.3);
				}
			}
		}
		.active {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
	.setting {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.item {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 16px 0;
			cursor: pointer;
		}
		.active {
			background-color: rgba(255, 255, 255, 0.1);
		}
		.el-icon {
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
