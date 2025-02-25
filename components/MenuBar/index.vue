<template>
	<ClientOnly>
		<el-aside :width="menuWidth" :class="[hideSidebar, setting.menuBar.position]">
			<el-scrollbar>
				<div class="menu">
					<div
						class="item"
						v-for="route in categories"
						:key="route.path"
						:class="{ active: route.path === routePath }"
						@click="onChangeMenu(route.path)"
					>
						<el-icon>
							<svg-icon v-if="route.meta.icon" :name="route.meta.icon" />
						</el-icon>
						<div class="title">{{ route.name }}</div>
					</div>
				</div>
			</el-scrollbar>
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
import { categories } from '~/assets/website/categories';
const { openSettingDrawer, openTour } = useSettingsStore();
const { setting } = storeToRefs(useSettingsStore());

const route = useRoute();
const router = useRouter();

const { x, y } = useMouseInElement();

const autoHide = computed(() => setting.value.menuBar.autoHide);
const menuWidth = computed(() => setting.value.menuBar.width + 'px');
const bgColor = computed(() => setting.value.menuBar.bgColor);
const color = computed(() => setting.value.menuBar.color);

const translateX = computed(() => {
	switch (setting.value.menuBar.position) {
		case 'left':
			return `translateX(${-setting.value.menuBar.width + 'px'})`;
		case 'right':
			return `translateX(${setting.value.menuBar.width + 'px'})`;
		case 'top':
			return `translateY(${-setting.value.menuBar.width + 'px'})`;
		case 'bottom':
			return `translateY(${setting.value.menuBar.width + 'px'})`;
	}
});

const hideSidebar = computed(() => {
	const { width } = setting.value.menuBar;
	const { innerWidth, innerHeight } = window;
	if (autoHide.value) {
		switch (setting.value.menuBar.position) {
			case 'left':
				return x > width ? 'hide-sidebar' : '';
			case 'right':
				return innerWidth - x < width ? 'hide-sidebar' : '';
			case 'top':
				return y > width ? 'hide-sidebar' : '';
			case 'bottom':
				return innerHeight - x < width ? 'hide-sidebar' : '';
		}
	} else {
		return '';
	}
});

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
	position: fixed;
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
.left {
	height: 100%;
	top: 0;
	left: 0;
}
.right {
	height: 100%;
	top: 0;
	right: 0;
}
.bottom {
	bottom: 0;
}
.top {
	top: 0;
}

.bottom,
.top {
	width: 100%;
	padding: 0;
	flex-direction: row;
	.el-scrollbar {
		width: 100%;
		height: v-bind(menuWidth);
		:deep .el-scrollbar__view {
			height: 100%;
			.menu {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				.item {
					padding: 0 16px;
				}
			}
		}
	}
	.setting {
		flex-direction: row;
		.item {
			padding: 0 16px;
		}
	}
}
.hide-sidebar {
	transform: v-bind(translateX);
}
</style>
