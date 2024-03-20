<template>
	<el-config-provider :locale="locale">
		<el-container class="el-container-parent">
			<MenuBar />
			<el-container class="el-container-child">
				<Engines />
				<div class="main"><NuxtPage /></div>
			</el-container>
			<div class="wallpaper">
				<el-icon :size="30" title="切换壁纸" @click="changeWallpaper">
					<svg-icon name="wide" />
				</el-icon>
			</div>
			<Setting />
		</el-container>
		<el-footer>
			<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
		</el-footer>
	</el-config-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
const settingStore = useSettingsStore();

const { setting } = storeToRefs(settingStore);
const { changeWallpaper, initGloabalSetting } = settingStore;

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});

const locale = ref(zhCn);

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);

onMounted(() => {
	initGloabalSetting();
});
</script>
<style lang="scss" scoped>
.el-container-parent {
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
</style>
