<template>
	<el-container class="el-container-parent">
		<MenuBar />
		<el-container class="el-container-child">
			<Engines />
			<div class="main"><slot /></div>
		</el-container>
		<div v-if="!loading" class="loading" />
		<div class="wallpaper">
			<el-icon :size="30" title="切换壁纸" @click="changeWallpaper">
				<svg-icon name="wide" />
			</el-icon>
		</div>
		<Setting />
		<el-footer>
			<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
		</el-footer>
	</el-container>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
const settingStore = useSettingsStore();

const { setting } = storeToRefs(settingStore);
const { changeWallpaper, initGloabalSetting } = settingStore;

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);

const loading = ref(false);

onMounted(() => {
	initGloabalSetting();
	setTimeout(() => {
		loading.value = true;
	}, 500);
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
	.el-container-child {
		flex-direction: column;
		.main {
			position: relative;
		}
	}
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
