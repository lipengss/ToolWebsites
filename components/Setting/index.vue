<template>
	<el-drawer v-model="settingStore.showDrawer" :modal="false" size="600px">
		<el-tabs tab-position="left" class="demo-tabs">
			<el-tab-pane label="主题/壁纸">
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
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="侧边栏">
				<el-form-item label="侧边栏宽度">
					<el-slider v-model="settingStore.setting.menuBar.width" :min="60" :max="400" class="ml10" />
				</el-form-item>
			</el-tab-pane>
		</el-tabs>
	</el-drawer>
</template>
<script setup lang="ts">
import { useSettingsStore } from '~/stores/settings';
import { predefineColors } from '~/assets/utils/publicData';
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
