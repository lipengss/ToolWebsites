<template>
	<el-container class="el-container-parent" @contextmenu.prevent="contextmenu">
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
		<div v-if="!loading" class="loading" />
		<div class="wallpaper">
			<el-icon :size="30" title="切换壁纸" @click="changeWallpaper">
				<svg-icon name="wide" />
			</el-icon>
		</div>
		<Setting />
		<transition name="popup">
			<div class="contextmenu" v-if="context.show" :style="{ left: context.clientX + 'px', top: context.clientY + 'px' }">
				<div class="item" @click="changeWallpaper">
					<el-icon><svg-icon name="menu-picture" /></el-icon>
					<span>换壁纸</span>
				</div>
				<div class="item" @click="showDrawer = true">
					<el-icon><svg-icon name="setting" /></el-icon>
					<span>设置</span>
				</div>
			</div>
		</transition>
	</el-container>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';

import { useSettingsStore } from '~/stores/settings';
const settingStore = useSettingsStore();

const { setting, showDrawer } = storeToRefs(settingStore);
const { changeWallpaper, initGloabalSetting } = settingStore;

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);

const loading = ref(false);

const context = reactive({
	show: false,
	clientX: 0,
	clientY: 0,
});

function contextmenu(event: any) {
	const { clientX, clientY } = event;
	context.clientX = clientX;
	context.clientY = clientY;
	context.show = true;
}

onMounted(() => {
	initGloabalSetting();
	setTimeout(() => {
		loading.value = true;
	}, 500);
	window.addEventListener('click', () => {
		context.show = false;
	});
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

	.contextmenu {
		position: fixed;
		z-index: 900;
		border-radius: 6px;
		cursor: pointer;
		padding: 5px 4px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
		background-color: #0b0b0bcc;
		backdrop-filter: blur(10px);
		.item {
			min-width: 100px;
			line-height: 24px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 4px 6px;
			margin: 4px 0;
			border-radius: 4px;
			color: #fff;
			.el-icon {
				margin-right: 6px;
			}
			span {
				font-size: 12px;
			}
			&:hover {
				background-color: #ffffff1a;
				transition: background-color 0.3s ease-in-out;
			}
		}
	}
	.el-container-child {
		flex-direction: column;
		.main {
			position: relative;
		}
	}
}

.popup-enter-active,
.popup-leave-active {
	// transition: transform 0.5s;
}
.popup-enter {
	background-color: red;
}
.popup-leave-to {
	background-color: #000;
}

.wallpaper {
	height: 50px;
	position: fixed;
	top: 0;
	right: 10%;
	&::before {
		content: '';
		width: 1px;
		height: 40px;
		position: absolute;
		background-color: #ffa750;
	}
	.el-icon {
		position: absolute;
		bottom: 0;
		left: -15px;
		cursor: pointer;
		animation: rotate 1.6s linear infinite;
		&:hover {
			animation-play-state: paused;
		}
	}
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
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
.loading {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: #fff;
}
</style>
