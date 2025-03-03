<template>
	<el-config-provider :locale="locale">
		<div class="nuxt-container" id="nuxt-container" :style="style">
			<!-- 菜单 -->
			<MenuBar />
			<NuxtLayout>
				<Engines />
				<el-scrollbar view-class="nuxt-page-scroll">
					<NuxtPage />
				</el-scrollbar>
			</NuxtLayout>
			<Loading />
			<ToggleWallpaper />
		</div>
		<div id="tooltip" class="tooltip">
			<div class="name"></div>
		</div>
		<div id="x-line" class="x-line"></div>
		<div id="y-line" class="y-line"></div>
	</el-config-provider>
	<!-- 右键菜单 -->
	<Contextmenu />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
const { initGlobalSetting, setGlobalSetting } = useSettingsStore();
const { setting } = storeToRefs(useSettingsStore());

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);
const menuWidth = computed(() => setting.value.menuBar.width + 'px');
const style = computed(() => `padding-${setting.value.menuBar.position}: ${menuWidth.value}`);

// 判断是移动端给body加一个类名
const isMobileFn = () => {
	if (window.innerWidth < 768 || /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		document.body.classList.add('mobile');

		setting.value.app.async = false;
		setting.value.app.columnGap = 10;
		setting.value.app.rowGap = 30;
		setting.value.app.screenWidth = 100;
		setGlobalSetting();
	} else {
		document.body.classList.remove('mobile');
	}
};

window.addEventListener('resize', isMobileFn);

onMounted(() => {
	isMobileFn();
	initGlobalSetting();
});

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});
const locale = ref(zhCn);
</script>
<style lang="scss" scoped>
.nuxt-container {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	&:before,
	&:before {
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
}
.x-line,
.y-line {
	width: 1px;
	height: 1px;
	position: fixed;
	left: 0;
	top: 0;
	background-color: blue;
}
.nuxt-page-scroll {
	scroll-snap-type: y mandatory;
}
.tooltip {
	width: 200px;
	height: 240px;
	position: fixed;
	transform: translate(20px, 20px);
	z-index: 100;
	border-radius: 4px;
	border: 1px solid #ccc;
	background-color: #fff;
	.name {
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		line-height: 40px;
		background-color: aliceblue;
	}
}
</style>
