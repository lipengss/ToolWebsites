<template>
	<el-config-provider :locale="locale">
		<div class="nuxt-container">
			<NuxtLayout> <NuxtPage /></NuxtLayout>
			<Loading />
			<ToggleWallpaper />
		</div>
	</el-config-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { initGloabalSetting } = useSettingsStore();
const { setting } = storeToRefs(useSettingsStore());

const bgOpacity = computed(() => `rgba(0,0,0,${setting.value.bg.opacity})`);
const bgBlur = computed(() => `blur(${setting.value.bg.blur}px)`);

onMounted(() => {
	initGloabalSetting();
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
</style>
