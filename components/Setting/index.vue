<template>
	<el-drawer v-model="settingStore.showDrawer" title="风 格 配 置" size="450px">
		<el-divider>主题/壁纸</el-divider>
		<el-form label-width="100px">
			<el-form-item label="深色模式">
				<el-switch :model-value="isDark" @change="toggleDark()" />
			</el-form-item>
			<el-form-item label="主题色">
				<color-picker v-model:color="settingStore.setting.theme" :color-list="predefineColors" @change="changeThemeColor" />
			</el-form-item>
			<el-form-item label="遮罩透明度">
				<el-slider v-model="settingStore.setting.bg.opacity" :min="0" :max="1" :step="0.1" class="ml10" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="背景模糊">
				<el-slider v-model="settingStore.setting.bg.blur" :min="0" :max="60" :step="1" class="ml10" @change="setGlobalSetting" />
			</el-form-item>
			<el-form-item label="自动切换背景">
				<el-space>
					<el-switch v-model="settingStore.setting.bg.auto" @change="setGlobalSetting" />
					<el-select
						style="width: 100px"
						placeholder="时间间隔"
						v-if="settingStore.setting.bg.auto"
						v-model="settingStore.setting.bg.autoTime"
						@change="setGlobalSetting"
					>
						<el-option v-for="item in timeStepList" :key="item.value" :label="item.label" :value="item.value" />
					</el-select>
				</el-space>
			</el-form-item>
			<el-divider>菜单栏</el-divider>
			<el-form-item label="菜单栏宽度">
				<el-slider v-model="settingStore.setting.menuBar.width" :min="60" :max="400" class="ml10" />
			</el-form-item>
			<el-form-item label="背景颜色">
				<color-picker v-model:color="settingStore.setting.menuBar.bgColor" @change="changeThemeColor" />
			</el-form-item>
			<el-form-item label="字体颜色">
				<color-picker v-model:color="settingStore.setting.menuBar.color" @change="changeThemeColor" />
			</el-form-item>
		</el-form>
		<el-space direction="vertical" fill class="w100">
			<el-button type="primary" size="large" class="w100" :icon="CopyDocument">一键复制配置</el-button>
			<el-button type="info" size="large" class="w100" :icon="RefreshRight">一键恢复默认</el-button>
		</el-space>
	</el-drawer>
</template>
<script setup lang="ts">
import { useSettingsStore } from '~/stores/settings';
import { predefineColors, timeStepList } from '~/assets/utils/publicData';
import { CopyDocument, RefreshRight } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';

const settingStore = useSettingsStore();
const { setGlobalSetting } = settingStore;

const isDark = useDark();
const toggleDark = useToggle(isDark);

function changeThemeColor() {
	settingStore.onColorPickerChange();
	setGlobalSetting();
}
</script>
