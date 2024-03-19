<template>
	<el-config-provider :locale="locale">
		<el-container class="el-container-parent" :class="`menu-bar-${position}`">
			<MenuBar />
			<el-container class="el-container-child">
				<Engines />
				<div class="main"><NuxtPage /></div>
			</el-container>
		</el-container>
		<el-drawer v-model="settingStore.showDrawer" :modal="false" size="600px">
			<el-tabs tab-position="left" class="demo-tabs">
				<el-tab-pane label="主题/壁纸">
					<el-form label-width="100px">
						<el-form-item label="深色模式">
							<el-switch :model-value="isDark" @change="toggleDark()" />
						</el-form-item>
						<el-form-item label="主题色">
							<color-picker
								v-model:color="settingStore.setting.menuBar.theme"
								:color-list="predefineColors"
								@change="settingStore.onColorPickerChange()"
							/>
						</el-form-item>
						<el-form-item label="侧边栏宽度">
							<el-slider v-model="settingStore.setting.menuBar.width" :min="60" :max="400" class="ml10" />
						</el-form-item>
						<el-form-item label="遮罩透明度">
							<el-slider v-model="settingStore.setting.menuBar.maskOpacity" :min="0" :max="1" :step="0.1" class="ml10" />
						</el-form-item>
						<el-form-item label="背景模糊">
							<el-slider v-model="settingStore.setting.menuBar.maskBlur" :min="0" :max="60" :step="1" class="ml10" />
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="侧边栏"></el-tab-pane>
			</el-tabs>
		</el-drawer>
		<el-footer>
			<NuxtLink to="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">京ICP备2024051908号-1</NuxtLink>
		</el-footer>
	</el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { useSettingsStore } from '~/stores/settings';
import { useDark, useToggle } from '@vueuse/core';
import { predefineColors } from '~/assets/utils/publicData';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const settingStore = useSettingsStore();

const position = computed(() => settingStore.setting.menuBar.position);

useSeoMeta({
	title: '前端工具网站',
	description: '图片转base64、图片压缩',
	keywords: '图片转base64、图片压缩、图片处理、在线工具、工具集合',
});

const locale = ref(zhCn);

const state = reactive({
	lastScrollTop: 0,
	scrollDirection: '',
	isRender: true,
});

const menuWidth = computed(() => settingStore.setting.menuBar.width + 'px');
const maskOpacity = computed(() => `rgba(0,0,0,${settingStore.setting.menuBar.maskOpacity})`);
const maskBlur = computed(() => `blur(${settingStore.setting.menuBar.maskBlur}px)`);

function handleScroll() {
	const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
	if (currentScrollTop > state.lastScrollTop) {
		state.scrollDirection = 'down';
	} else {
		state.scrollDirection = 'up';
	}
	state.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	setTimeout(() => {
		state.isRender = false;
	}, 300);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
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
		background-color: v-bind(maskOpacity);
	}
	&::before {
		backdrop-filter: v-bind(maskBlur);
	}
	.el-container-child {
		flex-direction: column;
		.main {
			position: relative;
		}
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
